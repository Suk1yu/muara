import express from "express";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Diperlukan supaya rate limiting baca IP asli pengguna dengan benar saat
// di-deploy di belakang proxy seperti Vercel (bukan IP proxy-nya sendiri).
app.set("trust proxy", 1);

app.use(express.json());
app.use(express.static("public")); // jalan normal untuk lokal (npm start)

// Vercel SENGAJA mengabaikan express.static() (lihat docs resminya),
// jadi "/" perlu route eksplisit yang kirim index.html langsung —
// kalau cuma andalkan static middleware, hasilnya "Cannot GET /" di Vercel.
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ─── Rate limiting ───
// Lapisan umum: batasi semua endpoint /api supaya tidak bisa di-spam.
const generalLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 menit
  max: 60,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Terlalu banyak permintaan, coba lagi sebentar." },
});
app.use("/api/", generalLimiter);

// Lapisan khusus /api/chat: lebih ketat karena ini yang memanggil AI (paling mahal/boros kuota).
const chatLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 20, // maksimal 20 pesan per menit per IP
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Kamu mengirim pesan terlalu cepat, tunggu sebentar ya." },
});

const NVIDIA_API_KEY = process.env.NVIDIA_API_KEY;
const NVIDIA_URL = "https://integrate.api.nvidia.com/v1/chat/completions";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_URL_BASE = "https://generativelanguage.googleapis.com/v1beta/models";

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";

// Model dari NVIDIA NIM
const NVIDIA_MODELS = [
  "meta/llama-3.3-70b-instruct",
  "deepseek-ai/deepseek-r1",
  "mistralai/mistral-large",
  "nvidia/llama-3.3-nemotron-super-49b-v1.5",
];

// Model dari Google Gemini
const GEMINI_MODELS = ["gemini-3.5-flash", "gemini-2.5-pro", "gemini-2.5-flash"];

// Model dari Groq (catatan: nama model di API Groq sedikit berbeda dari
// yang biasa disebut orang, jadi dipakai id resminya langsung)
const GROQ_MODELS = ["openai/gpt-oss-120b", "groq/compound", "llama-3.3-70b-versatile"];

// Gabungan semua model yang tampil di dropdown.
// NVIDIA_MODELS belum dimasukkan karena API key NVIDIA belum di-approve —
// begitu key-nya sudah ada, tinggal tambahkan kembali "...NVIDIA_MODELS," di bawah ini.
const AVAILABLE_MODELS = [...GEMINI_MODELS, ...GROQ_MODELS];

app.get("/api/models", (req, res) => {
  res.json({ models: AVAILABLE_MODELS });
});

// ─── Batas ukuran input (anti-abuse & anti-boros biaya API) ───
const MAX_MESSAGE_LENGTH = 4000; // karakter
const MAX_HISTORY_ITEMS = 30; // jumlah pesan riwayat yang dikirim ke AI

// ─── Limit guest (belum login) ───
// Catatan: disimpan di memori (Map biasa), jadi akan reset kalau server
// di-restart, dan TIDAK sinkron antar-instance kalau di-deploy sebagai
// serverless (misal Vercel bisa jalankan beberapa instance berbeda).
// Untuk penegakan yang benar-benar akurat di production, idealnya pakai
// database/Redis. Untuk pemakaian personal & lokal via Termux ini sudah cukup.
const GUEST_MESSAGE_LIMIT = 10;
const guestUsage = new Map(); // guestId -> jumlah chat terpakai

// Setiap provider mengembalikan { ok: true, reply } atau { ok: false, status, error }
// supaya logic guest-limit & response di /api/chat bisa konsisten satu tempat.

function toGeminiContents(history, message) {
  const turns = [...(history || []), { role: "user", content: message }];
  return turns.map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }));
}

async function callGemini(model, history, message) {
  if (!GEMINI_API_KEY) {
    return { ok: false, status: 500, error: "GEMINI_API_KEY belum diset di .env" };
  }
  try {
    const url = `${GEMINI_URL_BASE}/${model}:generateContent`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "x-goog-api-key": GEMINI_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ contents: toGeminiContents(history, message) }),
    });
    const data = await response.json();
    if (!response.ok) {
      console.error("Gemini API error:", data);
      return { ok: false, status: response.status, error: data };
    }
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text ?? "(tidak ada respons)";
    return { ok: true, reply };
  } catch (err) {
    console.error("Server error (gemini):", err);
    return { ok: false, status: 500, error: "Terjadi kesalahan di server" };
  }
}

async function callGroq(model, history, message) {
  if (!GROQ_API_KEY) {
    return { ok: false, status: 500, error: "GROQ_API_KEY belum diset di .env" };
  }
  const messages = [...(history || []), { role: "user", content: message }];
  try {
    const response = await fetch(GROQ_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ model, messages, max_tokens: 1024, temperature: 0.7 }),
    });
    const data = await response.json();
    if (!response.ok) {
      console.error("Groq API error:", data);
      return { ok: false, status: response.status, error: data };
    }
    const reply = data.choices?.[0]?.message?.content ?? "(tidak ada respons)";
    return { ok: true, reply };
  } catch (err) {
    console.error("Server error (groq):", err);
    return { ok: false, status: 500, error: "Terjadi kesalahan di server" };
  }
}

async function callNvidia(model, history, message) {
  if (!NVIDIA_API_KEY) {
    return { ok: false, status: 500, error: "NVIDIA_API_KEY belum diset di .env" };
  }
  const messages = [...(history || []), { role: "user", content: message }];
  try {
    const response = await fetch(NVIDIA_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${NVIDIA_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ model, messages, max_tokens: 1024, temperature: 0.7, stream: false }),
    });
    const data = await response.json();
    if (!response.ok) {
      console.error("NVIDIA API error:", data);
      return { ok: false, status: response.status, error: data };
    }
    const reply = data.choices?.[0]?.message?.content ?? "(tidak ada respons)";
    return { ok: true, reply };
  } catch (err) {
    console.error("Server error:", err);
    return { ok: false, status: 500, error: "Terjadi kesalahan di server" };
  }
}

app.post("/api/chat", chatLimiter, async (req, res) => {
  const { message, model, history, guestId } = req.body;

  if (!message || typeof message !== "string") {
    return res.status(400).json({ error: "message kosong" });
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    return res.status(400).json({ error: `Pesan terlalu panjang (maksimal ${MAX_MESSAGE_LENGTH} karakter).` });
  }

  // ── Cek limit guest SEBELUM memanggil AI (biar gak buang kuota kalau sudah mentok) ──
  const id = typeof guestId === "string" && guestId.trim() ? guestId.trim() : "anonymous";
  const used = guestUsage.get(id) || 0;

  if (used >= GUEST_MESSAGE_LIMIT) {
    return res.status(403).json({
      error: "GUEST_LIMIT_REACHED",
      message: "Kamu sudah mencapai batas 10 chat sebagai guest. Login untuk melanjutkan.",
      limit: GUEST_MESSAGE_LIMIT,
      used,
    });
  }

  const trimmedHistory = Array.isArray(history) ? history.slice(-MAX_HISTORY_ITEMS) : [];
  const chosenModel = model || AVAILABLE_MODELS[0];

  let result;
  if (GEMINI_MODELS.includes(chosenModel)) {
    result = await callGemini(chosenModel, trimmedHistory, message);
  } else if (GROQ_MODELS.includes(chosenModel)) {
    result = await callGroq(chosenModel, trimmedHistory, message);
  } else {
    result = await callNvidia(chosenModel, trimmedHistory, message);
  }

  if (!result.ok) {
    return res.status(result.status).json({ error: result.error });
  }

  // Baru dihitung kalau benar-benar berhasil dapat balasan dari AI —
  // jadi kalau provider error, guest tidak rugi kuota.
  const newUsed = used + 1;
  guestUsage.set(id, newUsed);

  res.json({ reply: result.reply, guestUsage: { used: newUsed, limit: GUEST_MESSAGE_LIMIT } });
});

// ─── Berita (NewsAPI.org) ───
// Key disimpan & dipanggil dari server, bukan dari browser.
const NEWSAPI_KEY = process.env.NEWSAPI_KEY;
const NEWS_QUERY = "Indonesia"; // ganti ke topik lain kalau mau, misal "technology" atau "startup"
const NEWS_CACHE_TTL = 10 * 60 * 1000; // 10 menit, biar gak boros kuota request gratis
let newsCache = { data: null, timestamp: 0 };

app.get("/api/news", async (req, res) => {
  if (!NEWSAPI_KEY) {
    return res.status(500).json({ error: "NEWSAPI_KEY belum diset di .env" });
  }

  const now = Date.now();
  if (newsCache.data && now - newsCache.timestamp < NEWS_CACHE_TTL) {
    return res.json(newsCache.data);
  }

  try {
    const query = encodeURIComponent(NEWS_QUERY);
    const url = `https://newsapi.org/v2/everything?q=${query}&language=en&sortBy=publishedAt&apiKey=${NEWSAPI_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      console.error("NewsAPI error:", data);
      return res.status(response.status).json({ error: data });
    }

    const result = { articles: data.articles || [] };
    newsCache = { data: result, timestamp: now };
    res.json(result);
  } catch (err) {
    console.error("Server error (news):", err);
    res.status(500).json({ error: "Gagal mengambil berita" });
  }
});

const PORT = process.env.PORT || 3000;

// app.listen tetap dipakai untuk development lokal (npm start).
// Saat di-deploy ke Vercel, Vercel akan memakai "export default app"
// di bawah ini dan menjalankannya sebagai serverless function.
app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});

export default app;
