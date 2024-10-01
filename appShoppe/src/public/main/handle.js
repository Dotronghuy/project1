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



function previewImage(event) {
  var reader = new FileReader();
  reader.onload = function () {
    var output = document.getElementById('preview');
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
}

document.addEventListener("DOMContentLoaded", function () {
  const oldImageSrc = "{{product.image}}";
  const oldFlagSrc = "{{product.flag}}";
  const oldUtilitiesSrc = "{{product.utilities}}";

  function previewImage(input, previewId, oldSrc) {
    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      const preview = document.getElementById(previewId);
      preview.src = e.target.result; // Cập nhật src của ảnh xem trước
    };

    if (file) {
      reader.readAsDataURL(file); // Đọc hình ảnh
    } else {
      // Nếu không có tệp nào được chọn, giữ nguyên ảnh cũ
      const preview = document.getElementById(previewId);
      preview.src = oldSrc; // Giữ ảnh cũ
    }
  }

  // Gán sự kiện cho input hình ảnh
  document.getElementById("image").addEventListener("change", function () {
    previewImage(this, "imagePreview", oldImageSrc);
    previewImage(this, "preview", oldImageSrc); // Cập nhật cho thẻ preview
  });

  document.getElementById("flag").addEventListener("change", function () {
    previewImage(this, "flagPreview", oldFlagSrc);
  });

  document.getElementById("utilities").addEventListener("change", function () {
    previewImage(this, "utilitiesPreview", oldUtilitiesSrc);
  });
});


