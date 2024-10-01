// const products = require("../../app/models/products");

document.addEventListener('DOMContentLoaded', function () {
    const checkboxAll = document.getElementById('checkbox-all');
    const checkSumBox = document.getElementById('check-sum-box');
    const checkboxes = document.querySelectorAll('.input-checkboxs[name="nameIds[]"]');
    const checkSumProducts = document.querySelector('.check-sum_products');
    const totalProducts = document.querySelector('.sum-products');
    const totalPriceDisplay = document.querySelector('.price-products');
    let totalPrice = 0;
    const deleCheckProduct = document.querySelector('.delete-products');


    // Hàm chuyển đổi giá từ chuỗi có dấu phân cách sang số
    function parsePrice(priceText) {
        return parseFloat(priceText.replace(/[^0-9,-]/g, '').replace(',', '.'));
    }

    const storedProductId = sessionStorage.getItem('selectedProductId');

    // Tích checkbox nếu có sản phẩm được lưu trong sessionStorage
    if (storedProductId) {
        checkboxes.forEach((checkbox) => {
            if (checkbox.value === storedProductId) {
                checkbox.checked = true;
            }
        });

        sessionStorage.removeItem('selectedProductId');
    }

    // Function cập nhật số lượng sản phẩm và tổng tiền
    function updateProductCountAndPrice() {
        let selectedQuantity = 0;
        totalPrice = 0;
        // Đếm số lượng sản phẩm đã chọn và tổng tiền
        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                const productElement = checkbox.closest('.product-cart');
                const priceText = productElement.querySelector('.price').textContent.trim();
                const price = parsePrice(priceText); // Chuyển giá từ chuỗi sang số
                const quantity = parseInt(productElement.querySelector('.quanlity-number').value, 10);
                selectedQuantity += quantity;
                totalPrice += price * quantity;
            }
        });


        totalPriceDisplay.textContent = `₫${totalPrice.toLocaleString('vi-VN')}`;
    }
    function updateProductCount() {
        const countProducts = document.querySelectorAll('.input-checkboxs[name="nameIds[]"]:checked').length;
        checkSumProducts.textContent = `Chọn tất cả (${countProducts})`;
        totalProducts.textContent = `Tổng thanh toán (${countProducts} Sản phẩm):`;
    }

    // Khi tích vào checkbox "Chọn tất cả"
    checkboxAll.addEventListener('change', function () {
        const isChecked = checkboxAll.checked;
        checkboxes.forEach((checkbox) => {
            checkbox.checked = isChecked;
        });
        checkSumBox.checked = isChecked;
        updateProductCountAndPrice();
        updateProductCount();
    });

    // Khi tích từng checkbox của sản phẩm
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', function () {
            const allChecked = Array.from(checkboxes).every((box) => box.checked);
            checkboxAll.checked = allChecked;
            checkSumBox.checked = allChecked;
            updateProductCountAndPrice();
            updateProductCount();

        });
    });

    // Khi tích vào checkbox "Chọn tất cả" của phần tổng
    checkSumBox.addEventListener('change', function () {
        const isChecked = checkSumBox.checked;
        checkboxes.forEach((checkbox) => {
            checkbox.checked = isChecked;
        });
        checkboxAll.checked = isChecked;
        updateProductCountAndPrice();
        updateProductCount();

    });

    document.querySelectorAll('.option-add, .option-minus').forEach((button) => {
        button.addEventListener('click', function () {
            updateProductCountAndPrice();
        });
    });



    const btnBuyProducts = document.querySelector('.buy-products-primary');

    btnBuyProducts.addEventListener('click', () => {
        if (totalPrice > 0) {
            createSuccessModal();
        } else {
            createErrorModal();
        }
    })

    function updateTotalPrice(productId, quanlity) {
        const priceElement = document.querySelector(`.price[data-id="${productId}"]`);
        const totalPriceElement = document.querySelector(`.total-price[data-id="${productId}"]`);

        if (priceElement && totalPriceElement) {
            const unitPrice = parsePrice(priceElement.textContent.trim());

            if (!isNaN(unitPrice)) {
                const totalPrice = unitPrice * quanlity;
                totalPriceElement.textContent = `₫${totalPrice.toLocaleString()}`;
            } else {
                console.error('Invalid unit price:', priceElement.textContent);
            }
        } else {
            console.error('Price or Total Price element not found');
        }
    }

    function updateQuanlity(productId, newQuanlity) {
        const quanlityInput = document.querySelector(`.quanlity-number[data-id="${productId}"]`);
        if (quanlityInput) {
            quanlityInput.value = newQuanlity;
            updateTotalPrice(productId, newQuanlity);
        } else {
            console.error('Quantity input not found');
        }
    }

    function initializeCart() {
        const priceElements = document.querySelectorAll('.price');
        priceElements.forEach(priceElement => {
            const productId = priceElement.getAttribute('data-id');
            const quanlityInput = document.querySelector(`.quanlity-number[data-id="${productId}"]`);
            if (quanlityInput) {
                const quanlity = parseInt(quanlityInput.value, 10);
                updateTotalPrice(productId, quanlity);
            }
        });
    }

    initializeCart();

    const minusButtons = document.querySelectorAll(".option-minus");
    const addButtons = document.querySelectorAll(".option-add");

    minusButtons.forEach(button => {
        button.addEventListener("click", function () {
            const productId = button.getAttribute("data-id");
            const quanlityInput = document.querySelector(`.quanlity-number[data-id="${productId}"]`);
            let quanlity = parseInt(quanlityInput.value, 10);

            if (quanlity > 1) {
                quanlity--;
                updateQuanlity(productId, quanlity);
            } else if (quanlity === 1) {
                deletedModal(productId);
            }
        });
    });

    addButtons.forEach(button => {
        button.addEventListener("click", function () {
            const productId = button.getAttribute("data-id");
            const quanlityInput = document.querySelector(`.quanlity-number[data-id="${productId}"]`);
            let quanlity = parseInt(quanlityInput.value, 10);

            quanlity++;
            updateQuanlity(productId, quanlity);
        });
    });

    const quanlityInputs = document.querySelectorAll(".quanlity-number");
    quanlityInputs.forEach(input => {

        input.addEventListener("input", function () {
            const productId = input.getAttribute("data-id");
            let quanlity = parseInt(input.value, 10);

            if (quanlity < 1 || isNaN(quanlity)) {
                quanlity = 1;
                input.value = quanlity;
            }

            updateQuanlity(productId, quanlity);
        });
    });

    deleCheckProduct.addEventListener('click', () => {
        const selectCheckBox = document.querySelectorAll('.input-checkboxs[name="nameIds[]"]:checked');
        if (selectCheckBox.length > 0) {
            const productIds = Array.from(selectCheckBox).map(checkbox => checkbox.value);
            deletedModal(productIds);
        }
    })

    async function createSuccessModal() {
        const modalDiv = document.createElement('div');
        modalDiv.classList.add('shoppe-pay-success');

        modalDiv.innerHTML = `
         <div class="wrrapper-modal-pay flex-col zise-modal bg-pay ">
        <div class="modal-pay flex-col w-full h-full">
            <div class="header-modal-pay flex-center w-full">
                <h3 class="title-header_pay">Thông báo</h3>
                <i class="fa-solid fa-xmark icon-close_pay"></i>
            </div>
            <div class="desc-modal-pay flex-col">
                <div class="notification-pay">
                    <i class="fa-regular fa-circle-check icon-success_pay"></i>
                </div>
                <div class="desc-pay">
                    <span>Thanh toán thành công</span>
                </div>
            </div>
            <button class="btn-exit-modal_pay size-btn-pay">OK</button>
        </div>
    </div>
       `;

        document.body.appendChild(modalDiv);
        document.body.style.overflow = 'hidden';

        modalDiv.querySelector('.icon-close_pay').addEventListener('click', () => {
            modalDiv.remove();
            document.body.style.overflow = '';
        });
        modalDiv.querySelector('.btn-exit-modal_pay').addEventListener('click', () => {
            modalDiv.remove();
            document.body.style.overflow = '';
        });

    }

    async function createErrorModal() {
        const modalDiv = document.createElement('div');
        modalDiv.classList.add('shoppe-pay-success');

        modalDiv.innerHTML = `
         <div class="wrrapper-modal-pay flex-col zise-modal bg-pay ">
        <div class="modal-pay flex-col w-full h-full">
            <div class="header-modal-pay flex-center w-full">
                <h3 class="title-header_pay">Thông báo</h3>
                <i class="fa-solid fa-xmark icon-close_pay"></i>
            </div>
            <div class="desc-modal-pay flex-col">
                <div class="notification-pay">
                    <i class="fa-solid fa-circle-exclamation icon-error_pay" style="color: #ee1111;"></i>
                </div>
                <div class="desc-pay">
                    <span>Bạn vẫn chưa chọn sản phẩm nào để mua.</span>
                </div>
            </div>
            <button class="btn-exit-modal_pay size-btn-pay">OK</button>
        </div>
    </div>
       `;

        document.body.appendChild(modalDiv);
        document.body.style.overflow = 'hidden';

        modalDiv.querySelector('.icon-close_pay').addEventListener('click', () => {
            modalDiv.remove();
            document.body.style.overflow = '';
        });
        modalDiv.querySelector('.btn-exit-modal_pay').addEventListener('click', () => {
            modalDiv.remove();
            document.body.style.overflow = '';
        });

    };

    // delete
    document.querySelectorAll('.delete').forEach((deleteButton) => {
        deleteButton.addEventListener('click', function () {
            const productId = this.getAttribute('data-id');
            deletedModal(productId);
        });
    });

    async function deletedModal(productId) {
        const modalDiv = document.createElement('div');
        modalDiv.classList.add('shoppe-pay-success');

        modalDiv.innerHTML = `
         <div class="wrrapper-modal-pay flex-col zise-modal bg-pay ">
        <div class="modal-pay flex-col w-full h-full">
            <div class="header-modal-pay flex-center w-full">
                <h3 class="title-header_pay">Thông báo</h3>
                <i class="fa-solid fa-xmark icon-close_pay"></i>
            </div>
            <div class="desc-modal-pay flex-col">
                <div class="notification-pay">
                    <i class="fa-solid fa-circle-exclamation icon-error_pay" style="color: #ee1111;"></i>
                </div>
                <div class="desc-pay">
                    <span>Bạn có chắc chắn muốn xóa sản phẩm này.</span>
                </div>
            </div>
            <button class="btn-exit-modal_pay size-btn-pay">Xóa</button>
        </div>
    </div>
       `;

        document.body.appendChild(modalDiv);
        document.body.style.overflow = 'hidden';

        modalDiv.querySelector('.icon-close_pay').addEventListener('click', () => {
            modalDiv.remove();
            document.body.style.overflow = '';
        });

        modalDiv.querySelector('.btn-exit-modal_pay').addEventListener('click', async () => {
            try {
                const response = await fetch('/cart/delete', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ productId: productId }) // Gửi productId trong body
                });

                if (response.ok) {
                    modalDiv.remove();
                    document.body.style.overflow = '';
                    location.reload();
                } else {
                    console.error('Lỗi khi xóa sản phẩm:', await response.text());
                    modalDiv.remove();
                    document.body.style.overflow = '';
                }
            } catch (error) {
                console.error('Lỗi khi gửi yêu cầu xóa sản phẩm:', error);
                modalDiv.remove();
                document.body.style.overflow = '';
            }
        });
    }





    // Khởi tạo
    updateProductCount();
    updateProductCountAndPrice();

});
