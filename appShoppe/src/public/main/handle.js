const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const imageFlag = $(".image_flag--container-wrapper");
const flagImage = $(".image-flag");
const flagInput = $("#flag");

const flagWrapperImages = {
  1: "/imageJS/flagmall-handleshoppe.png",
  2: "/imageJS/flagmall.png",
  3: "/imageJS/flaglove+.png",
  4: "/imageJS/flaghandleshoppe.png",
  5: "/imageJS/flaglove.png",
};

if (Array.isArray(flagImage) && flagImage.length > 0) {
  flagImage.forEach(function (flag) {
    const flagId = flag.dataset.flag;
    flag.style.backgroundImage = `url(${flagWrapperImages[flagId]})`;
  });
}

const utilities = $(".utilities");

const wrapperUtilities = {
  1: "/imageJS/inforPromotion1.png",
  2: "/imageJS/inforPromotion2.png",
  3: "/imageJS/inforPromotion3.png",
  4: "/imageJS/inforPromotion4.png",
  5: "/imageJS/inforPromotion5.png",
  6: "/imageJS/inforPromotion6.png",
};

if (Array.isArray(utilities) && utilities.length > 0) {
  utilities.forEach(function (utilities) {
    const utilitiesId = utilities.dataset.utilities;
    utilities.style.backgroundImage = `url(${wrapperUtilities[utilitiesId]})`;
  });
}
