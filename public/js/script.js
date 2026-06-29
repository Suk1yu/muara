  // ───────────────────────── Icon set ─────────────────────────
  const ICONS = {
    sidebar: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" /><path d="M9 4l0 16" /></svg>`,
    user: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>`,
    newChat: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415" /><path d="M16 5l3 3" /></svg>`,
    copy: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666" /><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" /></svg>`,
    heart: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>`,
    thumbDown: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3" /></svg>`,
    reload: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747" /><path d="M20 4v5h-5" /></svg>`,
    pencil: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" /><path d="M13.5 6.5l4 4" /></svg>`,
    check: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5L20 7"/></svg>`,
    alert: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4"/><path d="M12 17h.01"/><path d="M10.4 3.9 2.5 17a2 2 0 0 0 1.7 3h15.6a2 2 0 0 0 1.7-3L13.6 3.9a2 2 0 0 0-3.2 0Z"/></svg>`,
  };

  const BRAND_ICON = `<svg viewBox="0 0 260 256" fill="none"><path fill="#fff" d="M196.422 98.77S247.874 90.623 256 66.858h-78.819V48H4l21.334 24.862v25.473s53.83-2.811 74.653 13.047c28.502 26.532-32.058 62.397-32.058 62.397l-10.384 34.512c16.239-15.529 47.188-35.618 103.933-34.65-21.594 6.854-43.307 17.56-60.211 34.65h114.71l-10.802-34.512s-83.139-49.235-8.753-75.005v-.004Z"/></svg>`;

  const PROVIDER_ICONS = {
    gemini: `<svg viewBox="0 0 296 298" fill="none"><mask id="gemini__a" width="296" height="298" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#3186FF" d="M141.201 4.886c2.282-6.17 11.042-6.071 13.184.148l5.985 17.37a184.004 184.004 0 0 0 111.257 113.049l19.304 6.997c6.143 2.227 6.156 10.91.02 13.155l-19.35 7.082a184.001 184.001 0 0 0-109.495 109.385l-7.573 20.629c-2.241 6.105-10.869 6.121-13.133.025l-7.908-21.296a184 184 0 0 0-109.02-108.658l-19.698-7.239c-6.102-2.243-6.118-10.867-.025-13.132l20.083-7.467A183.998 183.998 0 0 0 133.291 26.28l7.91-21.394Z"/></mask><g mask="url(#gemini__a)"><g><ellipse cx="163" cy="149" fill="#3689FF" rx="196" ry="159"/></g><g><ellipse cx="33.5" cy="142.5" fill="#F6C013" rx="68.5" ry="72.5"/></g><g><ellipse cx="19.5" cy="148.5" fill="#F6C013" rx="68.5" ry="72.5"/></g><g><path fill="#FA4340" d="M194 10.5C172 82.5 65.5 134.333 22.5 135L144-66l50 76.5Z"/></g><g><path fill="#FA4340" d="M190.5-12.5C168.5 59.5 62 111.333 19 112L140.5-89l50 76.5Z"/></g><g><path fill="#14BB69" d="M194.5 279.5C172.5 207.5 66 155.667 23 155l121.5 201 50-76.5Z"/></g><g><path fill="#14BB69" d="M196.5 320.5C174.5 248.5 68 196.667 25 196l121.5 201 50-76.5Z"/></g></g></svg>`,
    deepseek: `<svg viewBox="0 0 24 24"><path fill="#4D6BFE" d="M23.748 4.482c-.254-.124-.364.113-.512.234-.051.039-.094.09-.137.136-.372.397-.806.657-1.373.626-.829-.046-1.537.214-2.163.848-.133-.782-.575-1.248-1.247-1.548-.352-.156-.708-.311-.955-.65-.172-.241-.219-.51-.305-.774-.055-.16-.11-.323-.293-.35-.2-.031-.278.136-.356.276-.313.572-.434 1.202-.422 1.84.027 1.436.633 2.58 1.838 3.393.137.093.172.187.129.323-.082.28-.18.552-.266.833-.055.179-.137.217-.329.14a5.526 5.526 0 0 1-1.736-1.18c-.857-.828-1.631-1.742-2.597-2.458a11.365 11.365 0 0 0-.689-.471c-.985-.957.13-1.743.388-1.836.27-.098.093-.432-.779-.428-.872.004-1.67.295-2.687.684a3.055 3.055 0 0 1-.465.137 9.597 9.597 0 0 0-2.883-.102c-1.885.21-3.39 1.102-4.497 2.623C.082 8.606-.231 10.684.152 12.85c.403 2.284 1.569 4.175 3.36 5.653 1.858 1.533 3.997 2.284 6.438 2.14 1.482-.085 3.133-.284 4.994-1.86.47.234.962.327 1.78.397.63.059 1.236-.03 1.705-.128.735-.156.684-.837.419-.961-2.155-1.004-1.682-.595-2.113-.926 1.096-1.296 2.746-2.642 3.392-7.003.05-.347.007-.565 0-.845-.004-.17.035-.237.23-.256a4.173 4.173 0 0 0 1.545-.475c1.396-.763 1.96-2.015 2.093-3.517.02-.23-.004-.467-.247-.588zM11.581 18c-2.089-1.642-3.102-2.183-3.52-2.16-.392.024-.321.471-.235.763.09.288.207.486.371.739.114.167.192.416-.113.603-.673.416-1.842-.14-1.897-.167-1.361-.802-2.5-1.86-3.301-3.307-.774-1.393-1.224-2.887-1.298-4.482-.02-.386.093-.522.477-.592a4.696 4.696 0 0 1 1.529-.039c2.132.312 3.946 1.265 5.468 2.774.868.86 1.525 1.887 2.202 2.891.72 1.066 1.494 2.082 2.48 2.914.348.292.625.514.891.677-.802.09-2.14.11-3.054-.614zm1-6.44a.306.306 0 0 1 .415-.287.302.302 0 0 1 .2.288.306.306 0 0 1-.31.307.303.303 0 0 1-.304-.308zm3.11 1.596c-.2.081-.399.151-.59.16a1.245 1.245 0 0 1-.798-.254c-.274-.23-.47-.358-.552-.758a1.73 1.73 0 0 1 .016-.588c.07-.327-.008-.537-.239-.727-.187-.156-.426-.199-.688-.199a.559.559 0 0 1-.254-.078.253.253 0 0 1-.114-.358c.028-.054.16-.186.192-.21.356-.202.767-.136 1.146.016.352.144.618.408 1.001.782.391.451.462.576.685.914.176.265.336.537.445.848.067.195-.019.354-.25.452z"/></svg>`,
    meta: `<svg viewBox="0 0 646 854" fill="none"><path d="M140.629 0.239929C132.66 1.52725 123.097 5.69568 116.354 10.845C95.941 26.3541 80.1253 59.2728 73.4435 100.283C70.9302 115.792 69.2138 137.309 69.2138 153.738C69.2138 173.109 71.4819 197.874 74.7309 214.977C75.4665 218.778 75.8343 222.15 75.5278 222.395C75.2826 222.64 72.2788 225.092 68.9072 227.789C57.3827 236.984 44.2029 251.145 35.1304 264.08C17.7209 288.784 6.44151 316.86 1.72133 347.265C-0.117698 359.28 -0.608106 383.555 0.863118 395.57C4.11207 423.278 12.449 446.695 26.7321 468.151L31.391 475.078L30.0424 477.346C20.4794 493.407 12.3264 516.64 8.52575 538.953C5.522 556.608 5.15419 561.328 5.15419 584.99C5.15419 608.837 5.4607 613.557 8.28054 630.047C11.6521 649.786 18.5178 670.689 26.1804 684.605C28.6938 689.141 34.8239 698.581 35.5595 699.072C35.8047 699.194 35.0691 701.462 33.9044 704.098C25.077 723.408 17.537 749.093 14.4106 770.733C12.2038 785.567 11.8973 790.349 11.8973 805.981C11.8973 825.903 13.0007 835.589 17.1692 851.466L17.7822 853.795H44.019H70.3172L68.6007 850.546C57.9957 830.93 57.0149 794.517 66.1487 758.166C70.3172 741.369 75.0374 729.048 83.8647 712.067L89.1366 701.769V695.455C89.1366 689.57 89.014 688.896 87.1137 685.034C85.6424 682.091 83.6808 679.578 80.1866 676.145C74.2404 670.383 69.9494 664.314 66.5165 656.835C51.4365 624.1 48.494 575.489 59.0991 534.049C63.5128 516.762 70.8076 501.376 78.4702 492.978C83.6808 487.215 86.378 480.779 86.378 474.097C86.378 467.17 83.926 461.469 78.4089 455.523C62.5932 438.604 52.8464 418.006 49.3522 394.038C44.3868 359.893 53.3981 322.683 73.8726 293.198C93.9181 264.263 122.055 245.689 153.503 240.724C160.552 239.559 173.732 239.743 181.088 241.092C189.119 242.502 194.145 242.072 199.295 239.62C205.67 236.617 208.858 232.877 212.597 224.295C215.907 216.633 218.482 212.464 225.409 203.821C233.746 193.461 241.776 186.411 254.649 177.89C269.362 168.266 286.097 161.278 302.771 157.906C308.839 156.68 311.659 156.496 323 156.496C334.341 156.496 337.161 156.68 343.229 157.906C367.688 162.872 391.964 175.5 411.335 193.399C415.503 197.261 425.495 209.644 428.683 214.794C429.909 216.816 432.055 221.108 433.403 224.295C437.142 232.877 440.33 236.617 446.705 239.62C451.671 242.011 456.881 242.502 464.605 241.214C476.804 239.13 486.183 239.314 498.137 241.766C538.841 249.98 574.273 283.512 589.966 328.446C603.636 367.862 599.774 409.118 579.422 440.626C575.989 445.96 572.556 450.251 567.591 455.523C556.863 466.986 556.863 481.208 567.53 492.978C585.062 512.165 596.035 559.367 592.724 600.99C590.518 628.453 583.468 653.035 573.782 666.95C572.066 669.402 568.511 673.57 565.813 676.145C562.319 679.578 560.358 682.091 558.886 685.034C556.986 688.896 556.863 689.57 556.863 695.455V701.769L562.135 712.067C570.963 729.048 575.683 741.369 579.851 758.166C588.863 794.027 588.066 829.704 577.767 849.995C576.909 851.711 576.173 853.305 576.173 853.489C576.173 853.673 587.882 853.795 602.226 853.795H628.218L628.892 851.159C629.26 849.75 629.873 847.604 630.179 846.378C630.854 843.681 632.202 835.712 633.306 828.049C634.348 820.325 634.348 791.881 633.306 783.299C629.383 752.158 622.823 727.454 612.096 704.098C610.931 701.462 610.195 699.194 610.44 699.072C610.747 698.888 612.463 696.436 614.302 693.677C627.666 673.448 635.88 648.008 640.049 614.415C641.152 605.158 641.152 565.374 640.049 556.485C637.106 533.559 633.551 517.988 627.666 502.234C625.214 495.675 618.716 481.821 615.958 477.346L614.609 475.078L619.268 468.151C633.551 446.695 641.888 423.278 645.137 395.57C646.608 383.555 646.118 359.28 644.279 347.265C639.497 316.798 628.279 288.845 610.87 264.08C601.797 251.145 588.617 236.984 577.093 227.789C573.721 225.092 570.717 222.64 570.472 222.395C570.166 222.15 570.534 218.778 571.269 214.977C578.687 176.296 578.441 128.053 570.656 90.3524C563.913 57.4951 551.653 31.3808 535.837 16.3008C523.209 4.28578 510.336 -0.863507 494.888 0.11731C459.456 2.20154 430.89 42.9667 419.61 107.21C417.771 117.57 416.178 129.708 416.178 133.018C416.178 134.305 415.932 135.347 415.626 135.347C415.319 135.347 412.929 134.121 410.354 132.589C383.014 116.405 352.608 107.762 323 107.762C293.392 107.762 262.986 116.405 235.646 132.589C233.071 134.121 230.681 135.347 230.374 135.347C230.068 135.347 229.822 134.305 229.822 133.018C229.822 129.585 228.167 117.08 226.39 107.21C216.152 49.5259 192.674 11.3354 161.472 1.71112C157.181 0.423799 144.982 -0.434382 140.629 0.239929ZM151.051 50.139C159.878 57.1273 169.686 77.1114 175.326 99.4863C176.368 103.532 177.471 108.191 177.778 109.907C178.023 111.563 178.697 115.302 179.249 118.183C181.64 131.179 182.743 145.217 182.866 162.32L182.927 179.178L178.697 185.43L174.468 191.744H164.598C153.074 191.744 141.61 193.216 130.637 196.158C126.714 197.139 122.913 198.12 122.178 198.304C121.013 198.549 120.829 198.181 120.155 193.154C116.538 165.875 116.722 135.654 120.707 110.52C125.12 82.5059 135.419 57.1273 145.472 49.6486C147.863 47.8708 148.292 47.9321 151.051 50.139ZM500.589 49.7098C506.658 54.1848 513.34 66.0772 518.305 81.2798C528.297 111.685 531.117 153.431 525.845 193.154C525.171 198.181 524.987 198.549 523.822 198.304C523.087 198.12 519.286 197.139 515.363 196.158C504.39 193.216 492.926 191.744 481.402 191.744H471.532L467.303 185.43L463.073 179.178L463.134 162.32C463.257 138.535 465.464 119.961 470.735 99.3024C476.314 77.1114 486.183 57.1273 494.949 50.139C497.708 47.9321 498.137 47.8708 500.589 49.7098Z" fill="white"/><path d="M313.498 358.237C300.195 359.525 296.579 360.015 290.203 361.303C279.843 363.448 265.989 368.23 256.365 372.95C222.895 389.317 199.846 416.596 192.796 448.166C191.386 454.419 191.202 456.503 191.202 467.047C191.202 477.468 191.386 479.736 192.735 485.682C202.114 526.938 240.12 557.405 289.284 562.983C299.95 564.148 346.049 564.148 356.715 562.983C396.193 558.508 430.154 537.114 445.418 507.076C449.463 499.046 451.425 493.835 453.264 485.682C454.613 479.736 454.797 477.468 454.797 467.047C454.797 456.503 454.613 454.419 453.203 448.166C442.965 402.313 398.461 366.207 343.903 359.341C336.792 358.483 318.157 357.747 313.498 358.237ZM336.424 391.585C354.631 393.547 372.96 400.045 387.672 409.853C395.58 415.125 406.737 426.159 411.518 433.393C417.403 442.342 420.774 451.476 422.307 462.572C422.981 467.66 422.614 471.522 420.774 479.736C417.893 491.996 408.943 504.808 396.867 513.758C391.227 517.865 379.519 523.812 372.347 526.141C358.738 530.493 349.849 531.29 318.095 531.045C297.376 530.861 293.697 530.677 287.751 529.574C267.461 525.773 251.4 517.681 239.753 505.36C230.312 495.429 226.021 486.357 223.692 471.706C222.65 464.901 224.611 453.622 228.596 444.12C233.439 432.534 245.944 418.129 258.327 409.853C272.671 400.29 291.552 393.486 308.9 391.647C315.582 390.911 329.742 390.911 336.424 391.585Z" fill="white"/><path d="M299.584 436.336C294.925 438.849 291.676 445.224 292.657 449.944C293.76 455.032 298.235 460.182 305.223 464.412C308.963 466.68 309.208 466.986 309.392 469.254C309.514 470.603 309.024 474.465 308.35 477.898C307.614 481.269 307.062 484.825 307.062 485.806C307.124 488.442 309.576 492.733 312.15 494.817C314.419 496.656 314.848 496.717 321.223 496.901C327.047 497.085 328.273 496.962 330.602 495.859C336.61 492.916 338.142 487.522 335.935 477.162C334.096 468.519 334.464 467.17 339.062 464.534C343.904 461.714 349.054 456.749 350.586 453.377C353.529 446.941 350.831 439.646 344.333 436.274C342.74 435.477 340.778 435.11 337.897 435.11C333.422 435.11 330.541 436.152 325.269 439.523L322.265 441.424L320.365 440.259C312.58 435.661 311.17 435.11 306.449 435.171C303.078 435.171 301.239 435.477 299.584 436.336Z" fill="white"/><path d="M150.744 365.165C139.894 368.598 131.802 376.567 127.634 387.908C125.611 393.303 124.63 401.824 125.488 406.421C127.511 417.394 136.522 427.386 146.76 430.145C159.633 433.516 169.257 431.309 177.778 422.85C182.743 418.007 185.441 413.777 188.138 406.911C190.099 402.069 190.222 401.211 190.222 394.345L190.283 386.989L187.709 381.717C183.601 373.38 176.184 367.188 167.602 364.92C162.759 363.694 154.974 363.756 150.744 365.165Z" fill="white"/><path d="M478.153 364.982C469.755 367.25 462.276 373.502 458.291 381.717L455.717 386.989L455.778 394.345C455.778 401.211 455.901 402.069 457.862 406.911C460.56 413.777 463.257 418.007 468.222 422.85C476.743 431.309 486.367 433.516 499.241 430.145C506.658 428.183 514.075 421.93 517.631 414.635C520.696 408.444 521.431 403.969 520.451 396.919C518.183 380.797 508.742 369.089 494.704 364.982C490.597 363.756 482.628 363.756 478.153 364.982Z" fill="white"/></svg>`,
    nvidia: `<svg xml:space="preserve" viewBox="35.188 31.512 351.46 258.785"><path fill="#fff" d="M384.195 282.109c0 3.771-2.769 6.302-6.047 6.302v-.023c-3.371.023-6.089-2.508-6.089-6.278 0-3.769 2.718-6.293 6.089-6.293 3.279-.001 6.047 2.523 6.047 6.292zm2.453 0c0-5.175-4.02-8.179-8.5-8.179-4.511 0-8.531 3.004-8.531 8.179 0 5.172 4.021 8.188 8.531 8.188 4.481 0 8.5-3.016 8.5-8.188m-9.91.692h.91l2.109 3.703h2.316l-2.336-3.859c1.207-.086 2.2-.661 2.2-2.286 0-2.019-1.392-2.668-3.75-2.668h-3.411v8.813h1.961v-3.703m.001-1.492v-2.122h1.364c.742 0 1.753.06 1.753.965 0 .985-.523 1.157-1.398 1.157h-1.719M329.406 237.027l10.598 28.993H318.48l10.926-28.993zm-11.35-11.289-24.423 61.88h17.246l3.863-10.934h28.903l3.656 10.934h18.722l-24.605-61.888-23.362.008zm-49.033 61.903h17.497v-61.922l-17.5-.004.003 61.926zm-121.467-61.926-14.598 49.078-13.984-49.074-18.879-.004 19.972 61.926h25.207l20.133-61.926h-17.851zm70.725 13.484h7.52c10.91 0 17.966 4.898 17.966 17.609 0 12.714-7.056 17.613-17.966 17.613h-7.52v-35.222zm-17.35-13.484v61.926h28.366c15.113 0 20.048-2.512 25.384-8.148 3.769-3.957 6.207-12.641 6.207-22.134 0-8.707-2.063-16.468-5.66-21.304-6.481-8.649-15.817-10.34-29.75-10.34h-24.547zm-165.743-.086v62.012h17.645v-47.086l13.672.004c4.527 0 7.754 1.128 9.934 3.457 2.765 2.945 3.894 7.699 3.894 16.395v27.23h17.098v-34.262c0-24.453-15.586-27.75-30.836-27.75H35.188zm137.583.086.007 61.926h17.489v-61.926h-17.496z"/><path fill="#77B900" d="M82.211 102.414s22.504-33.203 67.437-36.638V53.73c-49.769 3.997-92.867 46.149-92.867 46.149s24.41 70.565 92.867 77.026v-12.804c-50.237-6.32-67.437-61.687-67.437-61.687zm67.437 36.223v11.726c-37.968-6.769-48.507-46.237-48.507-46.237s18.23-20.195 48.507-23.47v12.867c-.023 0-.039-.007-.058-.007-15.891-1.907-28.305 12.938-28.305 12.938s6.958 24.991 28.363 32.183m0-107.125V53.73c1.461-.112 2.922-.207 4.391-.257 56.582-1.907 93.449 46.406 93.449 46.406s-42.343 51.488-86.457 51.488c-4.043 0-7.828-.375-11.383-1.005v13.739c3.04.386 6.192.613 9.481.613 41.051 0 70.738-20.965 99.484-45.778 4.766 3.817 24.278 13.103 28.289 17.168-27.332 22.883-91.031 41.329-127.144 41.329-3.481 0-6.824-.211-10.11-.528v19.306H305.68V31.512H149.648zm0 49.144V65.777c1.446-.101 2.903-.179 4.391-.226 40.688-1.278 67.382 34.965 67.382 34.965s-28.832 40.043-59.746 40.043c-4.449 0-8.438-.715-12.028-1.922V93.523c15.84 1.914 19.028 8.911 28.551 24.786l21.18-17.859s-15.461-20.277-41.524-20.277c-2.833-.001-5.544.198-8.206.483"/></svg>`,
    mistral: `<svg preserveAspectRatio="xMidYMid" viewBox="0 0 256 233"><path d="M186.18182 0h46.54545v46.54545h-46.54545z"/><path fill="#F7D046" d="M209.45454 0h46.54545v46.54545h-46.54545z"/><path d="M0 0h46.54545v46.54545H0zM0 46.54545h46.54545V93.0909H0zM0 93.09091h46.54545v46.54545H0zM0 139.63636h46.54545v46.54545H0zM0 186.18182h46.54545v46.54545H0z"/><path fill="#F7D046" d="M23.27273 0h46.54545v46.54545H23.27273z"/><path fill="#F2A73B" d="M209.45454 46.54545h46.54545V93.0909h-46.54545zM23.27273 46.54545h46.54545V93.0909H23.27273z"/><path d="M139.63636 46.54545h46.54545V93.0909h-46.54545z"/><path fill="#F2A73B" d="M162.90909 46.54545h46.54545V93.0909h-46.54545zM69.81818 46.54545h46.54545V93.0909H69.81818z"/><path fill="#EE792F" d="M116.36364 93.09091h46.54545v46.54545h-46.54545zM162.90909 93.09091h46.54545v46.54545h-46.54545zM69.81818 93.09091h46.54545v46.54545H69.81818z"/><path d="M93.09091 139.63636h46.54545v46.54545H93.09091z"/><path fill="#EB5829" d="M116.36364 139.63636h46.54545v46.54545h-46.54545z"/><path fill="#EE792F" d="M209.45454 93.09091h46.54545v46.54545h-46.54545zM23.27273 93.09091h46.54545v46.54545H23.27273z"/><path d="M186.18182 139.63636h46.54545v46.54545h-46.54545z"/><path fill="#EB5829" d="M209.45454 139.63636h46.54545v46.54545h-46.54545z"/><path d="M186.18182 186.18182h46.54545v46.54545h-46.54545z"/><path fill="#EB5829" d="M23.27273 139.63636h46.54545v46.54545H23.27273z"/><path fill="#EA3326" d="M209.45454 186.18182h46.54545v46.54545h-46.54545zM23.27273 186.18182h46.54545v46.54545H23.27273z"/></svg>`,
    groq: `<svg viewBox="0 0 201 201"><path fill="#F54F35" d="M0 0h201v201H0V0Z"/><path fill="#FEFBFB" d="m128 49 1.895 1.52C136.336 56.288 140.602 64.49 142 73c.097 1.823.148 3.648.161 5.474l.03 3.247.012 3.482.017 3.613c.01 2.522.016 5.044.02 7.565.01 3.84.041 7.68.072 11.521.007 2.455.012 4.91.016 7.364l.038 3.457c-.033 11.717-3.373 21.83-11.475 30.547-4.552 4.23-9.148 7.372-14.891 9.73l-2.387 1.055c-9.275 3.355-20.3 2.397-29.379-1.13-5.016-2.38-9.156-5.17-13.234-8.925 3.678-4.526 7.41-8.394 12-12l3.063 2.375c5.572 3.958 11.135 5.211 17.937 4.625 6.96-1.384 12.455-4.502 17-10 4.174-6.784 4.59-12.222 4.531-20.094l.012-3.473c.003-2.414-.005-4.827-.022-7.241-.02-3.68 0-7.36.026-11.04-.003-2.353-.008-4.705-.016-7.058l.025-3.312c-.098-7.996-1.732-13.21-6.681-19.47-6.786-5.458-13.105-8.211-21.914-7.792-7.327 1.188-13.278 4.7-17.777 10.601C75.472 72.012 73.86 78.07 75 85c2.191 7.547 5.019 13.948 12 18 5.848 3.061 10.892 3.523 17.438 3.688l2.794.103c2.256.082 4.512.147 6.768.209v16c-16.682.673-29.615.654-42.852-10.848-8.28-8.296-13.338-19.55-13.71-31.277.394-9.87 3.93-17.894 9.562-25.875l1.688-2.563C84.698 35.563 110.05 34.436 128 49Z"/></svg>`,
    openai: `<svg preserveAspectRatio="xMidYMid" viewBox="0 0 256 260"><path fill="#fff" d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z"/></svg>`,
  };

  function getProviderKey(model) {
    if (!model) return null;
    if (model.startsWith("gemini")) return "gemini";
    if (model.startsWith("deepseek")) return "deepseek";
    if (model.startsWith("meta/")) return "meta";
    if (model.startsWith("llama-")) return "meta"; // llama yang di-host Groq, tanpa prefix vendor
    if (model.startsWith("nvidia/")) return "nvidia";
    if (model.startsWith("mistralai/")) return "mistral";
    if (model.startsWith("openai/")) return "openai";
    if (model.startsWith("groq/")) return "groq";
    return null;
  }
  function getModelIconSvg(model) {
    const key = getProviderKey(model);
    return key ? PROVIDER_ICONS[key] : "";
  }

  document.getElementById("sidebarToggle").innerHTML = ICONS.sidebar;
  document.getElementById("newChatBtn").innerHTML = ICONS.newChat;
  document.getElementById("loginBtn").innerHTML = ICONS.user;
  document.getElementById("brandIcon").innerHTML = BRAND_ICON;

  // ───────────────────────── i18n ─────────────────────────
  const STRINGS = {
    id: {
      login: "Masuk",
      newChat: "Obrolan baru",
      subtitle: "Pilih model di kotak pesan, lalu mulai obrolan kamu.",
      inputPlaceholder: "Tulis pesan...",
      newsEyebrow: "Berita Hari Ini",
      codeEyebrow: "Sedikit Kode dari Project Ini",
      sidebarEyebrow: "Riwayat Chat",
      sidebarSoon: "Soon",
      sidebarMsg1: "Fitur riwayat chat masih dalam pengembangan.",
      sidebarMsg2: "Nanti kamu bisa membuka lagi percakapan lama dari sini.",
      modelLoading: "Memuat…",
      modelFailed: "Gagal memuat model",
      modelNone: "Tidak ada model",
      newsEmpty: "Berita belum tersedia saat ini.",
      newsFailed: "Gagal memuat berita.",
      sendErrorPrefix: "Terjadi kesalahan: ",
      connError: "Gagal terhubung ke server.",
      loginToastBadge: "Soon",
      loginToastMsg: "Fitur login masih dalam pengembangan.",
      copyTitle: "Salin",
      copiedTitle: "Disalin!",
      likeTitle: "Suka",
      dislikeTitle: "Tidak suka",
      regenTitle: "Buat ulang respons",
      editTitle: "Edit pesan",
      retryLabel: "Coba lagi",
      editSave: "Simpan & kirim",
      editCancel: "Batal",
      guestQuota: (used, limit) => `Chat gratis: ${used}/${limit}`,
      guestLimitBadge: "Limit",
      guestLimitText: "Kamu sudah mencapai batas 10 chat sebagai guest. Login untuk melanjutkan chat tanpa batas.",
      guestLimitLogin: "Login",
      greet: { morning: "Selamat pagi", noon: "Selamat siang", afternoon: "Selamat sore", night: "Selamat malam" },
      minuteAgo: (n) => `${n} menit lalu`,
      hourAgo: (n) => `${n} jam lalu`,
      dayAgo: (n) => `${n} hari lalu`,
    },
    en: {
      login: "Log in",
      newChat: "New chat",
      subtitle: "Pick a model in the message box, then start chatting.",
      inputPlaceholder: "Type a message...",
      newsEyebrow: "Today's Headlines",
      codeEyebrow: "A Peek at This Project's Code",
      sidebarEyebrow: "Chat History",
      sidebarSoon: "Soon",
      sidebarMsg1: "Chat history is still in development.",
      sidebarMsg2: "Soon you'll be able to reopen old conversations here.",
      modelLoading: "Loading…",
      modelFailed: "Failed to load models",
      modelNone: "No models available",
      newsEmpty: "No news available right now.",
      newsFailed: "Failed to load news.",
      sendErrorPrefix: "Something went wrong: ",
      connError: "Couldn't connect to the server.",
      loginToastBadge: "Soon",
      loginToastMsg: "The login feature is still in development.",
      copyTitle: "Copy",
      copiedTitle: "Copied!",
      likeTitle: "Like",
      dislikeTitle: "Dislike",
      regenTitle: "Regenerate response",
      editTitle: "Edit message",
      retryLabel: "Retry",
      editSave: "Save & send",
      editCancel: "Cancel",
      guestQuota: (used, limit) => `Free chats: ${used}/${limit}`,
      guestLimitBadge: "Limit",
      guestLimitText: "You've reached the 10-chat guest limit. Log in to keep chatting without limits.",
      guestLimitLogin: "Log in",
      greet: { morning: "Good morning", noon: "Good afternoon", afternoon: "Good evening", night: "Good evening" },
      minuteAgo: (n) => `${n} min ago`,
      hourAgo: (n) => `${n}h ago`,
      dayAgo: (n) => `${n}d ago`,
    },
  };

  let currentLang = "id";
  let lastArticles = [];
  let newsLoaded = false;

  function t() { return STRINGS[currentLang]; }
  function nowTime() {
    return new Date().toLocaleTimeString(currentLang === "id" ? "id-ID" : "en-US", { hour: "2-digit", minute: "2-digit" });
  }

  function applyTranslations() {
    const s = t();
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (s[key] !== undefined) el.textContent = s[key];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.dataset.i18nPlaceholder;
      if (s[key]) el.placeholder = s[key];
    });
    document.documentElement.lang = currentLang;
    document.querySelectorAll(".lang-opt").forEach((b) => b.classList.toggle("active", b.dataset.lang === currentLang));
    document.getElementById("loginBtn").setAttribute("aria-label", s.login);
    document.getElementById("loginBtn").title = s.login;
    document.getElementById("newChatBtn").setAttribute("aria-label", s.newChat);
    document.getElementById("newChatBtn").title = s.newChat;
    setGreeting();
    if (typeof updateGuestQuotaDisplay === "function") updateGuestQuotaDisplay();
    if (newsLoaded) renderNews(lastArticles);
    if (conversation.length) renderConversation();
  }

  document.getElementById("langSwitch").addEventListener("click", (e) => {
    const btn = e.target.closest(".lang-opt");
    if (!btn) return;
    currentLang = btn.dataset.lang;
    applyTranslations();
  });

  // ───────────────────────── Greeting ─────────────────────────
  function setGreeting() {
    const hour = new Date().getHours();
    const g = t().greet;
    let text = g.night;
    if (currentLang === "id") {
      if (hour >= 4 && hour < 11) text = g.morning;
      else if (hour >= 11 && hour < 15) text = g.noon;
      else if (hour >= 15 && hour < 19) text = g.afternoon;
    } else {
      if (hour >= 4 && hour < 12) text = g.morning;
      else if (hour >= 12 && hour < 18) text = g.noon;
      else text = g.afternoon;
    }
    document.getElementById("greeting").textContent = text;
  }

  // ───────────────────────── Toast ─────────────────────────
  function showToast(badge, msg) {
    document.querySelectorAll(".toast").forEach((el) => el.remove());
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<span class="toast-badge">${badge}</span><span>${msg}</span>`;
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add("show"));
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 250);
    }, 2600);
  }

  document.getElementById("loginBtn").addEventListener("click", () => {
    showToast(t().loginToastBadge, t().loginToastMsg);
  });

  // ───────────────────────── Sidebar ─────────────────────────
  const sidebar = document.getElementById("sidebar");
  const backdrop = document.getElementById("backdrop");
  const sidebarToggle = document.getElementById("sidebarToggle");
  const sidebarClose = document.getElementById("sidebarClose");

  function openSidebar() { sidebar.classList.add("open"); backdrop.classList.add("open"); }
  function closeSidebar() { sidebar.classList.remove("open"); backdrop.classList.remove("open"); }

  sidebarToggle.addEventListener("click", () => {
    sidebar.classList.contains("open") ? closeSidebar() : openSidebar();
  });
  backdrop.addEventListener("click", closeSidebar);
  sidebarClose.addEventListener("click", closeSidebar);

  // ───────────────────────── Model selector (di dalam input box) ─────────────────────────
  let selectedModel = null;
  let availableModels = [];

  const modelEls = {
    empty: {
      pill: document.getElementById("modelPillEmpty"),
      label: document.getElementById("modelLabelEmpty"),
      icon: document.getElementById("modelIconEmpty"),
      dropdown: document.getElementById("modelDropdownEmpty"),
    },
    bottom: {
      pill: document.getElementById("modelPillBottom"),
      label: document.getElementById("modelLabelBottom"),
      icon: document.getElementById("modelIconBottom"),
      dropdown: document.getElementById("modelDropdownBottom"),
    },
  };

  function shortModelName(m) {
    if (!m) return "";
    const parts = m.split("/");
    return parts[parts.length - 1];
  }

  function setModelLabel(text, model) {
    const icon = model ? getModelIconSvg(model) : "";
    Object.values(modelEls).forEach((els) => {
      els.label.textContent = text;
      els.icon.innerHTML = icon;
    });
  }

  async function loadModels() {
    setModelLabel(t().modelLoading, null);
    try {
      const res = await fetch("/api/models");
      const data = await res.json();
      availableModels = data.models || [];
      selectedModel = availableModels[0] || null;
      renderModelDropdowns();
      setModelLabel(selectedModel ? shortModelName(selectedModel) : t().modelNone, selectedModel);
    } catch (err) {
      setModelLabel(t().modelFailed, null);
    }
  }

  function renderModelDropdowns() {
    Object.values(modelEls).forEach(({ dropdown }) => {
      dropdown.innerHTML = availableModels.map((m) => `
        <button type="button" class="model-option${m === selectedModel ? " active" : ""}" data-model="${m}">
          <span class="icon">${getModelIconSvg(m)}</span>
          <span class="opt-label">${m}</span>
          <span class="active-dot"></span>
        </button>
      `).join("");
    });
    document.querySelectorAll(".model-option").forEach((btn) => {
      btn.addEventListener("click", () => {
        selectedModel = btn.dataset.model;
        setModelLabel(shortModelName(selectedModel), selectedModel);
        document.querySelectorAll(".model-option").forEach((b) =>
          b.classList.toggle("active", b.dataset.model === selectedModel)
        );
        closeAllModelDropdowns();
      });
    });
  }

  function closeAllModelDropdowns() {
    Object.values(modelEls).forEach(({ dropdown, pill }) => {
      dropdown.classList.remove("open");
      pill.classList.remove("open");
    });
  }

  function toggleModelDropdown(key) {
    const isOpen = modelEls[key].dropdown.classList.contains("open");
    closeAllModelDropdowns();
    if (!isOpen) {
      modelEls[key].dropdown.classList.add("open");
      modelEls[key].pill.classList.add("open");
    }
  }

  modelEls.empty.pill.addEventListener("click", (e) => { e.stopPropagation(); toggleModelDropdown("empty"); });
  modelEls.bottom.pill.addEventListener("click", (e) => { e.stopPropagation(); toggleModelDropdown("bottom"); });
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".model-pill-wrap")) closeAllModelDropdowns();
  });

  loadModels();

  // ───────────────────────── News (bento) ─────────────────────────
  const newsGrid = document.getElementById("newsGrid");

  function timeAgo(dateStr) {
    const s = t();
    const diffMin = Math.max(1, Math.round((Date.now() - new Date(dateStr).getTime()) / 60000));
    if (diffMin < 60) return s.minuteAgo(diffMin);
    const diffHour = Math.round(diffMin / 60);
    if (diffHour < 24) return s.hourAgo(diffHour);
    return s.dayAgo(Math.round(diffHour / 24));
  }

  function renderNews(articles) {
    if (!articles.length) {
      newsGrid.innerHTML = `<div class="news-empty">${t().newsEmpty}</div>`;
      return;
    }
    newsGrid.innerHTML = articles.map((a, i) => {
      const isLg = i === 0;
      const isWide = i === 3;
      const bgStyle = isLg && a.urlToImage ? `style="background-image:url('${a.urlToImage}')"` : "";
      const cls = isLg ? "news-card-lg" : isWide ? "news-card-wide" : "";
      return `
        <a class="news-card ${cls}" href="${a.url}" target="_blank" rel="noopener" ${bgStyle}>
          <span class="news-source">${a.source?.name || "News"}</span>
          <span class="news-title">${a.title}</span>
          <span class="news-meta">${timeAgo(a.publishedAt)}</span>
        </a>
      `;
    }).join("");
  }

  async function loadNews() {
    newsGrid.innerHTML = Array.from({ length: 6 }).map((_, i) =>
      `<div class="news-skel" style="${i === 0 ? "grid-column:span 2;grid-row:span 2" : ""}"></div>`
    ).join("");

    try {
      const res = await fetch("/api/news");
      const data = await res.json();
      const articles = (data.articles || []).filter((a) => a.title && a.title !== "[Removed]").slice(0, 7);

      if (!res.ok) {
        newsGrid.innerHTML = `<div class="news-empty">${t().newsFailed}</div>`;
        return;
      }
      lastArticles = articles;
      newsLoaded = true;
      renderNews(articles);
    } catch (err) {
      newsGrid.innerHTML = `<div class="news-empty">${t().newsFailed}</div>`;
    }
  }

  loadNews();

  // ───────────────────────── Meteor background (chat session) ─────────────────────────
  function generateMeteors(count) {
    const layer = document.getElementById("meteorLayer");
    for (let i = 0; i < count; i++) {
      const el = document.createElement("div");
      el.className = "meteor";
      const top = Math.random() * 90 - 10;
      const left = Math.random() * 100;
      const duration = (2 + Math.random() * 6).toFixed(2);
      const delay = (Math.random() * 4).toFixed(2);
      el.style.top = top + "%";
      el.style.left = left + "%";
      el.style.animationDuration = duration + "s";
      el.style.animationDelay = delay + "s";
      layer.appendChild(el);
    }
  }
  generateMeteors(16);

  // ───────────────────────── Chat engine ─────────────────────────
  const emptyState = document.getElementById("emptyState");
  const chatState = document.getElementById("chatState");
  const chatMessages = document.getElementById("chatMessages");
  const formEmpty = document.getElementById("formEmpty");
  const formBottom = document.getElementById("formBottom");
  const inputEmpty = document.getElementById("inputEmpty");
  const inputBottom = document.getElementById("inputBottom");
  const newChatBtn = document.getElementById("newChatBtn");

  let chatStarted = false;
  let conversation = [];
  let editingIndex = null;

  // ───────────────────────── Guest quota (10 chat sebelum login) ─────────────────────────
  function getGuestId() {
    let id = localStorage.getItem("muara_guest_id");
    if (!id) {
      id = (crypto.randomUUID ? crypto.randomUUID() : "guest-" + Math.random().toString(36).slice(2) + Date.now());
      localStorage.setItem("muara_guest_id", id);
    }
    return id;
  }
  const guestId = getGuestId();
  let guestUsed = parseInt(localStorage.getItem("muara_guest_used") || "0", 10);
  let guestLimit = 10;
  let guestLimitReached = guestUsed >= guestLimit;

  function setGuestUsed(used, limit) {
    guestUsed = used;
    if (limit) guestLimit = limit;
    localStorage.setItem("muara_guest_used", String(guestUsed));
    updateGuestQuotaDisplay();
  }

  function updateGuestQuotaDisplay() {
    const s = t();
    const text = s.guestQuota(guestUsed, guestLimit);
    const low = guestUsed >= guestLimit - 2;
    [document.getElementById("guestQuotaEmpty"), document.getElementById("guestQuotaBottom")].forEach((el) => {
      if (!el) return;
      el.textContent = text;
      el.classList.toggle("low", low);
    });
  }

  function lockInputsForGuestLimit() {
    guestLimitReached = true;
    [inputEmptyRef(), inputBottomRef()].forEach((el) => { if (el) el.disabled = true; });
    formEmptyRef().querySelector(".send-btn").disabled = true;
    formBottomRef().querySelector(".send-btn").disabled = true;
  }
  // helper kecil supaya bisa dipanggil sebelum elemen-elemen di bawah dideklarasikan
  function inputEmptyRef() { return document.getElementById("inputEmpty"); }
  function inputBottomRef() { return document.getElementById("inputBottom"); }
  function formEmptyRef() { return document.getElementById("formEmpty"); }
  function formBottomRef() { return document.getElementById("formBottom"); }

  function showChatView() {
    if (chatStarted) return;
    chatStarted = true;
    emptyState.style.display = "none";
    chatState.style.display = "flex";
    newChatBtn.hidden = false;
    window.scrollTo(0, 0);
    setTimeout(() => inputBottom.focus(), 50);
  }

  function backToEmptyView() {
    chatStarted = false;
    conversation = [];
    editingIndex = null;
    chatMessages.innerHTML = "";
    chatState.style.display = "none";
    emptyState.style.display = "flex";
    newChatBtn.hidden = true;
    inputEmpty.value = "";
    window.scrollTo(0, 0);
    inputEmpty.focus();
  }

  newChatBtn.addEventListener("click", backToEmptyView);

  function disableSendButtons(disabled) {
    formEmpty.querySelector(".send-btn").disabled = disabled;
    formBottom.querySelector(".send-btn").disabled = disabled;
  }

  function buildApiHistory(uptoIndex) {
    return conversation.slice(0, uptoIndex)
      .filter((m) => m.role === "user" || m.role === "assistant")
      .map((m) => ({ role: m.role, content: m.content }));
  }

  function escapeHtmlText(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  // Konfigurasi marked: GFM aktif (tabel, dll) + single newline jadi <br>
  // supaya tetap rapi walau model tidak selalu pakai newline ganda.
  if (typeof marked !== "undefined") {
    marked.setOptions({ gfm: true, breaks: true });
  }

  function renderMarkdown(text) {
    if (typeof marked === "undefined" || typeof DOMPurify === "undefined") {
      // Fallback kalau library gagal load (misal tidak ada internet ke CDN):
      // tetap tampilkan teks polos & aman, jangan sampai kosong/error.
      return escapeHtmlText(text);
    }
    return DOMPurify.sanitize(marked.parse(text));
  }

  function renderConversation() {
    const s = t();
    chatMessages.innerHTML = conversation.map((m, i) => {
      if (m.role === "user") {
        if (editingIndex === i) {
          return `
            <div class="msg-row user">
              <div class="edit-box">
                <textarea id="editArea${i}">${escapeHtmlText(m.content)}</textarea>
                <div class="edit-actions">
                  <button type="button" class="edit-btn" data-action="edit-cancel">${s.editCancel}</button>
                  <button type="button" class="edit-btn save" data-action="edit-save" data-index="${i}">${s.editSave}</button>
                </div>
              </div>
            </div>`;
        }
        return `
          <div class="msg-row user">
            <div class="user-bubble-wrap"><div class="msg user">${escapeHtmlText(m.content)}</div></div>
            <div class="msg-time">${m.time}</div>
            <div class="msg-actions">
              <button type="button" class="msg-action" data-action="edit-start" data-index="${i}" title="${s.editTitle}">${ICONS.pencil}</button>
              <button type="button" class="msg-action" data-action="copy" data-index="${i}" title="${s.copyTitle}">${ICONS.copy}</button>
            </div>
          </div>`;
      }

      if (m.role === "assistant") {
        const likeActive = m.liked === "up" ? " is-active" : "";
        const dislikeActive = m.liked === "down" ? " is-active" : "";
        return `
          <div class="msg-row assistant">
            <div class="msg assistant markdown-body">${renderMarkdown(m.content)}</div>
            <div class="msg-time">${m.time}</div>
            <div class="msg-actions">
              <button type="button" class="msg-action" data-action="copy" data-index="${i}" title="${s.copyTitle}">${ICONS.copy}</button>
              <button type="button" class="msg-action like${likeActive}" data-action="like" data-index="${i}" title="${s.likeTitle}">${ICONS.heart}</button>
              <button type="button" class="msg-action dislike${dislikeActive}" data-action="dislike" data-index="${i}" title="${s.dislikeTitle}">${ICONS.thumbDown}</button>
              <button type="button" class="msg-action" data-action="regenerate" data-index="${i}" title="${s.regenTitle}">${ICONS.reload}</button>
            </div>
          </div>`;
      }

      if (m.role === "loading") {
        return `
          <div class="msg-row loading">
            <div class="dot-loader"><span></span><span></span><span></span></div>
          </div>`;
      }

      if (m.role === "error") {
        return `
          <div class="msg-row error">
            <div class="error-card">
              <span class="alert-icon">${ICONS.alert}</span>
              <div class="error-body">
                <div class="error-text">${escapeHtmlText(m.content)}</div>
                <button type="button" class="error-retry-btn" data-action="retry" data-index="${i}">${ICONS.reload}<span>${s.retryLabel}</span></button>
              </div>
            </div>
          </div>`;
      }

      if (m.role === "limit") {
        return `
          <div class="msg-row error">
            <div class="limit-card">
              <span class="alert-icon">${ICONS.alert}</span>
              <div class="limit-body">
                <div class="limit-text">${escapeHtmlText(m.content)}</div>
                <button type="button" class="limit-login-btn" data-action="limit-login">${ICONS.user}<span>${s.guestLimitLogin}</span></button>
              </div>
            </div>
          </div>`;
      }
      return "";
    }).join("");

    chatMessages.scrollTop = chatMessages.scrollHeight;

    if (editingIndex !== null) {
      const ta = document.getElementById(`editArea${editingIndex}`);
      if (ta) {
        ta.focus();
        ta.setSelectionRange(ta.value.length, ta.value.length);
      }
    }
  }

  async function runChatRequest(messageText, apiHistory, slotIndex) {
    disableSendButtons(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: messageText, model: selectedModel, history: apiHistory, guestId }),
      });
      const data = await res.json();

      if (res.status === 403 && data.error === "GUEST_LIMIT_REACHED") {
        conversation[slotIndex] = { role: "limit", time: nowTime(), content: data.message };
        setGuestUsed(data.used ?? guestLimit, data.limit ?? guestLimit);
        lockInputsForGuestLimit();
      } else if (!res.ok) {
        conversation[slotIndex] = {
          role: "error",
          time: nowTime(),
          content: t().sendErrorPrefix + (data.error?.message || JSON.stringify(data.error)),
          retryContent: messageText,
        };
      } else {
        conversation[slotIndex] = { role: "assistant", content: data.reply, time: nowTime(), liked: null };
        if (data.guestUsage) setGuestUsed(data.guestUsage.used, data.guestUsage.limit);
      }
    } catch (err) {
      conversation[slotIndex] = { role: "error", time: nowTime(), content: t().connError, retryContent: messageText };
    } finally {
      disableSendButtons(false);
      renderConversation();
      if (!guestLimitReached) inputBottom.focus();
    }
  }

  function handleNewUserMessage(text) {
    if (guestLimitReached) return;
    const trimmed = text.trim();
    if (!trimmed) return;
    showChatView();
    const apiHistory = buildApiHistory(conversation.length);
    conversation.push({ role: "user", content: trimmed, time: nowTime() });
    const loadingIdx = conversation.length;
    conversation.push({ role: "loading", time: nowTime() });
    renderConversation();
    runChatRequest(trimmed, apiHistory, loadingIdx);
  }

  function handleRegenerate(assistantIndex) {
    if (guestLimitReached) return;
    const userIndex = assistantIndex - 1;
    if (userIndex < 0 || conversation[userIndex].role !== "user") return;
    const trimmed = conversation[userIndex].content;
    const apiHistory = buildApiHistory(userIndex);
    conversation.splice(assistantIndex, conversation.length - assistantIndex, { role: "loading", time: nowTime() });
    renderConversation();
    runChatRequest(trimmed, apiHistory, assistantIndex);
  }

  function handleRetry(errorIndex) {
    if (guestLimitReached) return;
    const trimmed = conversation[errorIndex].retryContent;
    const apiHistory = buildApiHistory(errorIndex - 1);
    conversation[errorIndex] = { role: "loading", time: nowTime() };
    renderConversation();
    runChatRequest(trimmed, apiHistory, errorIndex);
  }

  function handleEditSave(userIndex, newText) {
    if (guestLimitReached) return;
    const trimmed = newText.trim();
    if (!trimmed) return;
    editingIndex = null;
    const apiHistory = buildApiHistory(userIndex);
    conversation.splice(userIndex, conversation.length - userIndex, { role: "user", content: trimmed, time: nowTime() });
    const loadingIdx = conversation.length;
    conversation.push({ role: "loading", time: nowTime() });
    renderConversation();
    runChatRequest(trimmed, apiHistory, loadingIdx);
  }

  async function copyText(text, btn) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    if (btn) {
      const original = btn.innerHTML;
      btn.innerHTML = ICONS.check;
      setTimeout(() => { btn.innerHTML = original; }, 1100);
    }
  }

  chatMessages.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-action]");
    if (!btn) return;
    const action = btn.dataset.action;
    const index = Number(btn.dataset.index);

    if (action === "copy") {
      copyText(conversation[index].content, btn);
    } else if (action === "like") {
      conversation[index].liked = conversation[index].liked === "up" ? null : "up";
      renderConversation();
    } else if (action === "dislike") {
      conversation[index].liked = conversation[index].liked === "down" ? null : "down";
      renderConversation();
    } else if (action === "regenerate") {
      handleRegenerate(index);
    } else if (action === "edit-start") {
      editingIndex = index;
      renderConversation();
    } else if (action === "edit-cancel") {
      editingIndex = null;
      renderConversation();
    } else if (action === "edit-save") {
      const ta = document.getElementById(`editArea${index}`);
      if (ta) handleEditSave(index, ta.value);
    } else if (action === "retry") {
      handleRetry(index);
    } else if (action === "limit-login") {
      showToast(t().loginToastBadge, t().loginToastMsg);
    }
  });

  formEmpty.addEventListener("submit", (e) => {
    e.preventDefault();
    const message = inputEmpty.value;
    inputEmpty.value = "";
    handleNewUserMessage(message);
  });

  formBottom.addEventListener("submit", (e) => {
    e.preventDefault();
    const message = inputBottom.value;
    inputBottom.value = "";
    handleNewUserMessage(message);
  });

  // ───────────────────────── Terminal typing animation ─────────────────────────
  const CODE_LINES = [
    [{ t: "app." }, { t: "post", c: "tok-fn" }, { t: "(" }, { t: '"/api/chat"', c: "tok-str" }, { t: ", " }, { t: "async", c: "tok-kw" }, { t: " (req, res) => {" }],
    [{ t: "  " }, { t: "const", c: "tok-kw" }, { t: " response = " }, { t: "await", c: "tok-kw" }, { t: " " }, { t: "fetch", c: "tok-fn" }, { t: "(NVIDIA_URL, {" }],
    [{ t: "    method: " }, { t: '"POST"', c: "tok-str" }, { t: "," }],
    [{ t: "    headers: { Authorization: " }, { t: "`Bearer ${NVIDIA_API_KEY}`", c: "tok-str" }, { t: " }," }],
    [{ t: "    body: " }, { t: "JSON.stringify", c: "tok-fn" }, { t: "({ model, messages, max_tokens: 1024 })," }],
    [{ t: "  });" }],
    [{ t: "" }],
    [{ t: "  " }, { t: "// balikin jawaban model ke frontend", c: "tok-com" }],
    [{ t: "  " }, { t: "const", c: "tok-kw" }, { t: " data = " }, { t: "await", c: "tok-kw" }, { t: " response." }, { t: "json", c: "tok-fn" }, { t: "();" }],
    [{ t: "  res." }, { t: "json", c: "tok-fn" }, { t: "({ reply: data.choices[0].message.content });" }],
    [{ t: "});" }],
  ];

  function escapeHtml(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function lineLength(segments) {
    return segments.reduce((sum, seg) => sum + seg.t.length, 0);
  }
  function renderLine(segments, revealed, withCursor) {
    let remaining = revealed;
    let html = "";
    for (const seg of segments) {
      if (remaining <= 0) break;
      const take = Math.min(seg.t.length, remaining);
      const chunk = escapeHtml(seg.t.slice(0, take));
      html += seg.c ? `<span class="${seg.c}">${chunk}</span>` : chunk;
      remaining -= take;
    }
    if (withCursor) html += '<span class="term-cursor"></span>';
    return html;
  }
  function sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }

  async function typeTerminal() {
    const body = document.getElementById("termBody");
    const codeEl = document.createElement("code");
    body.appendChild(codeEl);

    for (const segs of CODE_LINES) {
      const total = lineLength(segs);
      const lineDiv = document.createElement("div");
      codeEl.appendChild(lineDiv);

      if (total === 0) {
        lineDiv.innerHTML = "&nbsp;";
        await sleep(70);
        continue;
      }

      const charDelay = total > 40 ? 8 : 18;
      for (let n = 1; n <= total; n++) {
        lineDiv.innerHTML = renderLine(segs, n, true);
        await sleep(charDelay);
      }
      lineDiv.innerHTML = renderLine(segs, total, false);
      await sleep(80);
    }

    const lastLine = codeEl.lastElementChild;
    if (lastLine) {
      lastLine.insertAdjacentHTML("beforeend", '<span class="term-cursor"></span>');
    }
  }

  let terminalTyped = false;
  const termWindowEl = document.querySelector(".term-window");
  if (termWindowEl) {
    const termObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !terminalTyped) {
            terminalTyped = true;
            typeTerminal();
            termObserver.disconnect();
          }
        });
      },
      { threshold: 0.35 }
    );
    termObserver.observe(termWindowEl);
  }

  // Pengaman tambahan: kalau browser tetap memaksa scroll window saat keyboard
  // muncul/hilang (terjadi di beberapa browser Android lama), paksa balik ke 0.
  window.addEventListener("resize", () => window.scrollTo(0, 0));

  // init
  applyTranslations();
  updateGuestQuotaDisplay();
  if (guestLimitReached) lockInputsForGuestLimit();