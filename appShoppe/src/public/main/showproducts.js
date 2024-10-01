const btnAdd = document.getElementsByClassName('option-add');
const btnDelete = document.getElementsByClassName('option-minus');
const inputQuanlity = document.getElementsByClassName('quanlity-number');

for (let i = 0; i < btnAdd.length; i++) {
    btnAdd[i].addEventListener('click', () => {
        let currentValue = parseInt(inputQuanlity[i].value);
        inputQuanlity[i].value = currentValue + 1;
    })
    btnDelete[i].addEventListener('click', () => {
        let currentValue = parseInt(inputQuanlity[i].value);
        if (currentValue > 1) {
            inputQuanlity[i].value = currentValue - 1;
        }
    })
}

document.addEventListener('DOMContentLoaded', function () {
    const btnBuyNow = document.getElementById('btnBuyNow');
    const formAddToCart = document.getElementById('form-4');
    const hiddenQuanlity = document.getElementById('hiddenQuanlity');

    btnBuyNow.addEventListener('click', function (event) {
        event.preventDefault(); // Ngăn việc chuyển trang ngay lập tức

        // Lấy giá trị số lượng sản phẩm
        const quanlityInput = document.querySelector('.quanlity-number');
        const quantity = quanlityInput ? parseInt(quanlityInput.value) : 1; // Giá trị mặc định là 1 nếu không có input

        hiddenQuanlity.value = quantity;

        // Lưu ID sản phẩm vào sessionStorage
        const productId = formAddToCart.getAttribute('data-product-id');
        sessionStorage.setItem('selectedProductId', productId);

        // Gửi form để thêm sản phẩm vào giỏ hàng
        fetch(formAddToCart.action, {
            method: 'POST',
            body: new FormData(formAddToCart)
        })
            .then(response => {
                if (response.ok) {
                    // Sau khi thêm vào giỏ hàng thành công, chuyển hướng người dùng đến trang giỏ hàng
                    window.location.href = '/cart';
                } else {
                    console.error('Lỗi khi thêm sản phẩm vào giỏ hàng.');
                }
            })
            .catch(error => {
                console.error('Đã xảy ra lỗi:', error);
            });
    });
});



















