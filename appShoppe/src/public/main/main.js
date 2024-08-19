
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// handle mousehover events
const languageVietNam = $(".langVietNam");
const languageEnglish = $(".langEnglish");

languageVietNam.addEventListener("mouseenter", () => {
  languageVietNam.classList.add("active-language");
  languageEnglish.classList.remove("active-language");
});

languageEnglish.addEventListener("mouseenter", () => {
  languageEnglish.classList.add("active-language");
  languageVietNam.classList.remove("active-language");
});

const silderBanner = $(".start-show_banner-lists-item");

const sectionBanner = {
  banners: [
    {
      image: "/imageJS/sectionBanner1.jpg",
    },
    {
      image: "/imageJS/sectionBanner2.jpg",
    },
    {
      image: "/imageJS/sectionBanner3.jpg",
    },
    {
      image: "/imageJS/sectionBanner4.jpg",
    },
    {
      image: "/imageJS/sectionBanner5.jpg",
    },
    {
      image: "/imageJS/sectionBanner6.jpg",
    },
  ],
  render: function () {
    const htmls = this.banners.map((banner, index) => {
      return `
        <li class="start-show_banner-list-item show-list_item-JS" style="width=10%;">
          <a href="" class="start-list-item">
            <div class="wrap-item list-item">
                <img src="${banner.image}" alt="" class="item-avatar" style="object-fit:cover;">                                                  
            </div>
          </a>
        </li>
        `;
    });
    silderBanner.innerHTML = htmls.join("\n");
  },
  start: function () {
    this.render();
  },
};
sectionBanner.start();

// handle events sectionbanner
document.addEventListener("DOMContentLoaded", () => {
  let currentIndex = 0;
  const dots = $$(".silder-dot");
  const totalImage = silderBanner.children.length;
  const sliderWidth = silderBanner.children[0].offsetWidth;
  const btnNext = $(".silder-next");
  const btnPrev = $(".silder-pre");

  dots[currentIndex].classList.add("active-dot");

  function nextImage() {
    currentIndex = (currentIndex + 1) % totalImage;
    updateSilder();
  }
  function prevImage() {
    currentIndex = (currentIndex - 1 + totalImage) % totalImage;
    updateSilder();
  }
  function gotoSilder(index) {
    currentIndex = index;
    updateSilder();
  }
  function updateSilder() {
    silderBanner.style.transform = `translateX(-${currentIndex * 10}%) translateX(-${currentIndex * 0.2}%)`;
    activeDots();
  }
  function activeDots() {
    dots.forEach((dot, index) => {
      if (index === currentIndex) {
        dot.classList.add("active-dot");
      } else {
        dot.classList.remove("active-dot");
      }
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      gotoSilder(index);
    });
  });

  btnNext.addEventListener("click", nextImage);
  btnPrev.addEventListener("click", prevImage);

  setInterval(nextImage, 4000);
});

// category handle next/prev
const arrowNext = $(".arrow-category-next");
const arrowPrev = $(".arrow-category-prev");
const homeCategory = $(".lists-item");

arrowNext.addEventListener("click", () => {
  homeCategory.style.transform = `translateX(-30%) translateX(0px)`;
  arrowPrev.style.visibility = "visible";
  arrowNext.style.visibility = "hidden";
});

arrowPrev.addEventListener("click", () => {
  homeCategory.style.transform = `translateX(0) translateX(0)`;
  arrowPrev.style.visibility = "hidden";
  arrowNext.style.visibility = "visible";
});

// flash sale handle next/ prev , create time coutdown

const ulFlaseSale = $(".lists-imgae");

const sectionFlaseSale = {
  descFlaseSale: [
    {
      imageFlaseSale: "/imageJS/flasesale1.jpg",
      promotion: "/imageJS/inforPromotion1.png",
      money: 100.0,
      quanlity: "đang bán chạy",
    },
    {
      imageFlaseSale: "/imageJS/flasesale2.jpg",
      promotion: "/imageJS/inforPromotion2.png",
      money: 150.0,
      quanlity: "đang bán chạy",
    },
    {
      imageFlaseSale: "/imageJS/flasesale3.jpg",
      promotion: "/imageJS/inforPromotion3.png",
      money: 190.0,
      quanlity: "Chỉ còn 5",
    },
    {
      imageFlaseSale: "/imageJS/flasesale4.jpg",
      promotion: "/imageJS/inforPromotion4.png",
      money: 250.0,
      quanlity: "đang bán chạy",
    },
    {
      imageFlaseSale: "/imageJS/flasesale5.jpg",
      promotion: "/imageJS/inforPromotion5.png",
      money: 500.0,
      quanlity: "đang bán chạy",
    },
    {
      imageFlaseSale: "/imageJS/flasesale6.jpg",
      promotion: "/imageJS/inforPromotion6.png",
      money: 300.0,
      quanlity: "đang bán chạy",
    },
    {
      imageFlaseSale: "/imageJS/flasesale7.jpg",
      promotion: "/imageJS/inforPromotion1.png",
      money: 650.0,
      quanlity: "chỉ còn 8",
    },
    {
      imageFlaseSale: "/imageJS/flasesale8.jpg",
      promotion: "/imageJS/inforPromotion2.png",
      money: 250.0,
      quanlity: "đang bán chạy",
    },
    {
      imageFlaseSale: "/imageJS/flasesale9.jpg",
      promotion: "/imageJS/inforPromotion3.png",
      money: 300.0,
      quanlity: "đang bán chạy",
    },
    {
      imageFlaseSale: "/imageJS/flasesale10.jpg",
      promotion: "/imageJS/inforPromotion4.png",
      money: 50.0,
      quanlity: "đang bán chạy",
    },
    {
      imageFlaseSale: "/imageJS/flasesale11.jpg",
      promotion: "/imageJS/inforPromotion5.png",
      money: 120.0,
      quanlity: "đang bán chạy",
    },
    {
      imageFlaseSale: "/imageJS/flasesale12.jpg",
      promotion: "/imageJS/inforPromotion6.png",
      money: 200.0,
      quanlity: "đang bán chạy",
    },
    {
      imageFlaseSale: "/imageJS/flasesale13.jpg",
      promotion: "/imageJS/inforPromotion1.png",
      money: 950.0,
      quanlity: "đang bán chạy",
    },
    {
      imageFlaseSale: "/imageJS/flasesale14.jpg",
      promotion: "/imageJS/inforPromotion3.png",
      money: 100.0,
      quanlity: "đang bán chạy",
    },
    {
      imageFlaseSale: "/imageJS/flasesale15.jpg",
      promotion: "/imageJS/inforPromotion2.png",
      money: 20.0,
      quanlity: "đang bán chạy",
    },
    {
      imageFlaseSale: "/imageJS/flasesale16.jpg",
      promotion: "/imageJS/inforPromotion5.png",
      money: 260.0,
      quanlity: "đang bán chạy",
    },
  ],

  render: function () {
    const htmls = this.descFlaseSale.map((flaseSale, index) => {
      return `
      <li class="list-image" style="padding: 0px; width: 16.6667%;">
      <div class="content-list">
          <div class="desc-image column-image">
              <a href="" class="link-desc_imgae">
                  <div class="imgae-product">
                      <div class="icon-flase_sale">   
                          <div class="container-icon boder-icon font-icon">
                              <div class="svg-icon_flase--sale">
                                  <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.23077 0H4.23077L0 7.82222L3.5 9.14286V16L10 5.68889L6.53846 4.62222L9.23077 0Z" fill="url(#paint0_linear_2216_10611)"></path><defs><linearGradient id="paint0_linear_2216_10611" x1="0" y1="0" x2="0" y2="16" gradientUnits="userSpaceOnUse"><stop stop-color="#EE4D2D"></stop><stop offset="1" stop-color="#FF7337"></stop></linearGradient></defs>
                                  </svg>
                              </div>
                              -43%
                          </div>
                      </div>
                      <div class="desc-product">
                          <div class="banner-product fail">
                              <div class="link-banner_product fail" style="background-image: url(${flaseSale.promotion}); background-repeat: no-repeat; background-size: contain;"></div>
                          </div>
                          <div class="avatar-product fail wrap-product">
                              <div class="link-avatar_product fail wrap-product" style="background-image: url(${flaseSale.imageFlaseSale}); background-size: contain; background-repeat: no-repeat;"></div>
                          </div>
                      </div>
                  </div>
                  <div class="text-product">
                      <div class="desc-text_product">
                          <div class="wrap-unit_money">
                              <div class="container-unit">
                                  <div class="desc-container">
                                      <span class="money">₫</span>
                                      <span>${flaseSale.money}.000</span>
                                  </div>
                              </div>
                          </div>
                          <div class="pro-sales">
                              <div class="container-pro default" style="height: 16px;">
                                  <div class="icon-fire font-icon_fire"></div>
                                  <div class="quanlity font-quanlity">${flaseSale.quanlity}</div>
                                  <div class="quanlity-sale avatar-sale" style="width: 51%; border-radius: 8px 0 0 8px; height: 16px;"></div>
                                  <div class="quanlity-wrap " style="border-radius: 8px;"></div>
                              </div>
                          </div>
                      </div>
                        </div>
                    </a>
                </div>
            </div>
        </li>
      `;
    });
    ulFlaseSale.innerHTML = htmls.join("");
  },
  start: function () {
    this.render();
  },
};
sectionFlaseSale.start();

const prevFlaseSale = $(".arrow-flasesale-prev");
const nextFlaseSale = $(".arrow-flasesale-next");

let isTransitioning = false;
let translateVlaue = 0;
const flaseSlaeWidth = ulFlaseSale.clientWidth;
const moveAmout = 1000;

nextFlaseSale.addEventListener("click", () => {
  if (isTransitioning) return;

  if (translateVlaue > -(flaseSlaeWidth * (ulFlaseSale.children.length - 1))) {
    translateVlaue -= moveAmout;
    nextFlaseSale.style.visibility = "visible";
    prevFlaseSale.style.visibility = "visible";
  }

  if (translateVlaue === -(moveAmout * 2)) {
    nextFlaseSale.style.visibility = "hidden";
    prevFlaseSale.style.visibility = "visible";
  }

  isTransitioning = true;
  ulFlaseSale.style.transform = `translateX(${translateVlaue}px)`;

  setTimeout(() => {
    isTransitioning = false;
  }, 500);
});
prevFlaseSale.addEventListener("click", () => {
  if (isTransitioning) return;

  if (translateVlaue < 0) {
    translateVlaue += moveAmout;
    nextFlaseSale.style.visibility = "visible";
  }

  if (translateVlaue === 0) {
    prevFlaseSale.style.visibility = "hidden";
    nextFlaseSale.style.visibility = "visible";
  }

  isTransitioning = true;
  ulFlaseSale.style.transform = `translateX(${translateVlaue}px)`;

  setTimeout(() => {
    isTransitioning = false;
  }, 500);
});

// coutdown time

document.addEventListener("DOMContentLoaded", () => {
  const coutdownContainer = $(".coutdown-shoppe");
  const coutdownNumbers = $$(".coutdown-time_number");

  const now = new Date().getTime();
  const maxTime = now + 3 * 60 * 60 * 1000;

  const coutdownTimer = setInterval(() => {
    const currentTime = new Date().getTime();
    const distance = maxTime - currentTime;

    if (distance <= 0) {
      clearInterval(coutdownTimer);
      coutdownNumbers.forEach((number) => {
        number.textContent = 0;
      });
      return;
    }

    const hours = Math.floor(distance / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const formattedHours = padZero(hours);
    const formattedMinutes = padZero(minutes);
    const formattedSeconds = padZero(seconds);

    const timeArry = (
      formattedHours +
      formattedMinutes +
      formattedSeconds
    ).split("");

    coutdownNumbers.forEach((number, index) => {
      number.textContent = timeArry[index];
      if (index % 2 === 0) {
        number.classList.add("active");
      } else {
        number.classList.remove("active");
      }
    });
  }, 1000);
  function padZero(num) {
    return (num < 10 ? "0" : "") + num;
  }
});

// handle event shoppe mall
const bannerShoppeMall = $(".home-brand_list--item");

const shoppeMall = {
  infoBanner: [
    {
      image: "/imageJS/shoppmall1.jpg",
    },
    {
      image: "/imageJS/shoppmall2.jpg",
    },
    {
      image: "/imageJS/shoppmall3.jpg",
    },
    {
      image: "/imageJS/shoppmall4.jpg",
    },
    {
      image: "/imageJS/shoppmall5.jpg",
    },
    {
      image: "/imageJS/shoppmall6.jpg",
    },
  ],

  render: function () {
    const htmls = this.infoBanner.map((infobannerr, index) => {
      return `
      <li class="home-brand-item" style="height: 100%; width: 12.5%;">
      <div class="item-inner_baner">
          <div class="simple-banner with-banner">
              <a href="">
                  <img src="${infobannerr.image}" alt="" class="image-banner">
              </a>
          </div>
          <img src="${infobannerr.image}" alt="">
      </div>

  </li>
      `;
    });
    bannerShoppeMall.innerHTML = htmls.join("");
  },
  start: function () {
    this.render();
  },
};
shoppeMall.start();

document.addEventListener("DOMContentLoaded", () => {
  let currentIndex = 0;
  const dots = $$(".banner-dot");
  const totalBanners = bannerShoppeMall.children.length;
  const bannerWidth = bannerShoppeMall.children[0].offsetWidth;
  const btnNext = $(".banner-next");
  const btnPrev = $(".banner-pre");

  dots[currentIndex].classList.add("active-dot");

  function slipBanner() {
    currentIndex = (currentIndex + 1) % totalBanners;
    updateBanner();
  }

  function nextBanner() {
    currentIndex = (currentIndex + 1) % totalBanners;
    updateBanner();
  }
  function prevBanner() {
    currentIndex = (currentIndex - 1 + totalBanners) % totalBanners;
    updateBanner();
  }
  function gotoBanner(index) {
    currentIndex = index;
    updateBanner();
  }
  function updateBanner() {
    bannerShoppeMall.style.transform = `translateX(-${currentIndex * 12.5}%) translateX(0px)`;
    activeDot();
  }
  function activeDot() {
    dots.forEach((dot, index) => {
      if (index === currentIndex) {
        dot.classList.add("active-dot");
      } else {
        dot.classList.remove("active-dot");
      }
    });
  }
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      gotoBanner(index);
    });
  });
  btnNext.addEventListener("click", nextBanner);
  btnPrev.addEventListener("click", prevBanner);

  setInterval(slipBanner, 4000);
});

const trademarkShoppeMall = $(".lists-item_image--content");

const shoppeMallTrademark = {
  inforTrademark: [
    {
      image: "/imageJS/shoppemaillright1.jpg",
      title: "Thời trang -50%",
    },
    {
      image: "/imageJS/shoppemaillright2.jpg",
      title: "Ưu đãi đến 50%",
    },
    {
      image: "/imageJS/shoppemaillright3.jpg",
      title: "Deli siêu sale",
    },
    {
      image: "/imageJS/shoppemaillright4.jpg",
      title: "Giảm đến 50%",
    },
    {
      image: "/imageJS/shoppemaillright5.jpg",
      title: "Mua 1 được 2",
    },
    {
      image: "/imageJS/shoppemaillright6.jpg",
      title: "Mua 1 được 2",
    },
    {
      image: "/imageJS/shoppemaillright7.jpg",
      title: "Quà mọi đơn",
    },
    {
      image: "/imageJS/shoppemaillright8.jpg",
      title: "Mua là có quà",
    },
    {
      image: "/imageJS/shoppemaillright9.jpg",
      title: "Mua 1 tặng 1",
    },
    {
      image: "/imageJS/shoppemaillright10.jpg",
      title: "Mua 1 tặng 1",
    },
    {
      image: "/imageJS/shoppemaillright11.jpg",
      title: "Giảm đến 50%",
    },
    {
      image: "/imageJS/shoppemaillright12.jpg",
      title: "Mua là có quà",
    },
    {
      image: "/imageJS/shoppemaillright13.jpg",
      title: "Giảm đến 50%",
    },
    {
      image: "/imageJS/shoppemaillright14.jpg",
      title: "Mua là có quà",
    },
    {
      image: "/imageJS/shoppemaillright15.jpg",
      title: "Mua là có quà",
    },
  ],

  render: function () {
    const htmls = this.inforTrademark.map((info, index) => {
      return `
      <li class="list-item_image--content" style="padding: 0; width: 12.5%;">
        <div>
            <div class="options-item default">
                <a href="" class="option-item_image">
                    <div class="desc-op_image default">
                        <div class="op_image" style="background-image: url(${info.image}); background-repeat: no-repeat; background-size: contain;"></div>
                    </div>
                </a>
                <div class="options-title">${info.title}</div>
            </div>
        </div>
      </li>
      `;
    });
    trademarkShoppeMall.innerHTML = htmls.join("");
    trademarkShoppeMall.innerHTML += `
    <li class="list-item_image--content" style="padding: 0; width: 12.5%;">
      <a href="" class="list-item_imgae--content-see-more default">
        <div class="list-item_seemore"></div>
        <div class="seemore-content">
            Xem tất cả
            <div class="seemore_icon">
                <i class="fa-solid fa-chevron-right "></i>
            </div>
        </div>
      </a>  
    </li>
    `;
  },

  start: function () {
    this.render();
  },
};
shoppeMallTrademark.start();

const btnNextShoppeMall = $(".arrow-shoppemall-next");
const btnPrevShoppeMall = $(".arrow-shoppemall-prev");

btnNextShoppeMall.addEventListener("click", () => {
  trademarkShoppeMall.style.transform = `translateX(-800px)`;
  btnNextShoppeMall.style.visibility = "hidden";
  btnPrevShoppeMall.style.visibility = "visible";
});
btnPrevShoppeMall.addEventListener("click", () => {
  trademarkShoppeMall.style.transform = `translateX(0)`;
  btnNextShoppeMall.style.visibility = "visible";
  btnPrevShoppeMall.style.visibility = "hidden";
});

// handle search top
const listsSearchTop = $(".image-seacrch_lists--item");
const nextSearch = $(".btn-search-next");
const prevSearch = $(".btn-search-prev");

const renderSearchTop = {
  infoSearch: [
    {
      image: "/imageJS/searchTop1.jpg",
      title: "Áo khoác dạ nam",
      buyQuanlity: "Bán 2k+ / tháng",
    },
    {
      image: "/imageJS/searchTop2.jpg",
      title: "Khuyên Tai Titan",
      buyQuanlity: "Bán 21k+ / tháng",
    },
    {
      image: "/imageJS/searchTop3.jpg",
      title: "Mô Hình Dragon Ball",
      buyQuanlity: "Bán 3k+ / tháng",
    },
    {
      image: "/imageJS/searchTop4.jpg",
      title: "Kính Cường Lực Iphone Chống Nhìn Trộm",
      buyQuanlity: "Bán 410k+ / tháng",
    },
    {
      image: "/imageJS/searchTop5.jpg",
      title: "Son Kem Lì Mịn Môi Romand",
      buyQuanlity: "Bán 207k+ / tháng",
    },
    {
      image: "/imageJS/searchTop6.jpg",
      title: "Ốp Iphone 5",
      buyQuanlity: "Bán 215k+ / tháng",
    },
    {
      image: "/imageJS/searchTop3.jpg",
      title: "Mô Hình Dragon Ball",
      buyQuanlity: "Bán 3k+ / tháng",
    },
    {
      image: "/imageJS/searchTop2.jpg",
      title: "Khuyên Tai Titan",
      buyQuanlity: "Bán 21k+ / tháng",
    },
  ],
  render: function () {
    const htmls = this.infoSearch.map((info, index) => {
      return `
      <li class="image-seacrch_list" style="width: 16.6667%; scroll-snap-align: start; padding: 0;">
        <a href="" class="shoppe-link_seacrch">
            <div class="wrapper-seacrch default">
                <div class="shoppe-icon_top local-icon_top"></div>
                <div class="image-seacrch default">
                    <img src="${info.image}" class="avatar-seacrch size-seacrch" style="object-fit: contain;">
                </div>
                <div class="text-quanlity_buy">${info.buyQuanlity}</div>
            </div>
            <div class="text-search">${info.title}</div>
        </a>
      </li>
      `;
    });
    listsSearchTop.innerHTML = htmls.join("");
  },
  start: function () {
    this.render();
  },
};
renderSearchTop.start();

// handle next , prev

nextSearch.addEventListener("click", () => {
  listsSearchTop.style.transform = `translateX(-400px)`;
  nextSearch.style.visibility = "hidden";
  prevSearch.style.visibility = "visible";
});

prevSearch.addEventListener("click", () => {
  listsSearchTop.style.transform = `translateX(0)`;
  nextSearch.style.visibility = "visible";
  prevSearch.style.visibility = "hidden";
});

// handle evnet chat box
const miniChat = $(".mini-chat");
const chatBox = $(".shoppe-chat_box");

const extensionClose = $(".extension-close");

const extensionZoomOut = $(".extension-zoom-out");
const extensionZoomIn = $(".extension-zoom-in");
const infoMessageChatBox = $(".chat-box_right");

function openMiniChat() {
  miniChat.onclick = () => {
    chatBox.classList.add("wh-chat-box");
    miniChat.classList.add("wh-mini-chat_none");
    extensionZoomOut.style.visibility = "visible";
    infoMessageChatBox.classList.remove("zoom-out");
    extensionZoomIn.style.visibility = "hidden";
  };
}
openMiniChat();

extensionClose.addEventListener("click", () => {
  chatBox.classList.remove("wh-chat-box");
  miniChat.classList.remove("wh-mini-chat_none");
});

function zoomOut() {
  extensionZoomOut.onclick = () => {
    infoMessageChatBox.classList.add("zoom-out");
    chatBox.classList.add("wh-extension-zoom-out");
    extensionZoomOut.style.visibility = "hidden";
    extensionZoomIn.style.visibility = "visible";
  };
}
zoomOut();

function zoomOutIn() {
  if (zoomOut) {
    extensionClose.onclick = () => {
      chatBox.classList.remove("wh-extension-zoom-out");
      miniChat.classList.remove("wh-mini-chat_none");
    };
  }
}
zoomOutIn();

extensionZoomIn.addEventListener("click", () => {
  infoMessageChatBox.classList.remove("zoom-out");
  chatBox.classList.remove("wh-extension-zoom-out");
  extensionZoomOut.style.visibility = "visible";
  extensionZoomIn.style.visibility = "hidden";
});

const allMsg = $(".shoppe-all_msg");
const subMsg = $(".wrrapper-sub_status");
let subMsgVisible = false;
const inputSearch = $(".shoppe-input");

inputSearch.addEventListener("click", (e) => {
  e.stopPropagation();
  allMsg.style.display = "none";
});
inputSearch.addEventListener("blur", () => {
  allMsg.style.display = "block";
});

document.addEventListener("click", (event) => {
  if (event.target !== inputSearch) {
    allMsg.style.display = "block";
  }
});

allMsg.addEventListener("click", () => {
  if (!subMsgVisible) {
    subMsg.classList.add("show");
    subMsgVisible = true;
  } else {
    subMsg.classList.remove("show");
    subMsgVisible = false;
  }
});








