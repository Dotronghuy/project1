document.addEventListener("DOMContentLoaded", () => {
    const wrapShoppeCart = document.querySelector('.wrap-shoppe_cart');

    wrapShoppeCart.addEventListener('mouseover', () => {
        const cookies = document.cookie.split('; ');
        const userKeyCookie = cookies.find(cookie => cookie.startsWith('userKey='));
        const userKey = userKeyCookie ? decodeURIComponent(userKeyCookie.split('=')[1]) : null;

        console.log('UserKey from cookie:', userKey);

        const existingModal = document.querySelector('.wrap-modal_cart');
        if (existingModal) {
            existingModal.remove();
        }

        let modalHTML = '';
        if (!userKey) {
            modalHTML = `
                <div class="wrap-modal_cart size-modal arrow-up">
                    <div class="modal-cart">
                        <div class="desc-modal">
                            <img src="wrapperImage/img/bags.png" alt="" class="modal-cart_avatar">
                            <div class="text-cart">
                                <p>Đăng nhập để xem giỏ hàng</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else {
            modalHTML = `
                <div class="wrap-modal_cart size-modal arrow-up">
                    <div class="modal-cart">
                        <div class="desc-modal flex-col">
                            <h3 class="title-modal-cart">Sản phẩm mới thêm</h3>
                            <div class="products-cart-modal flex-center w-full">
                                <div class="products-cart-item flex-center w-full h-full default">
                                    <div class="prodcut-cart-image">
                                        <img src="imageJS/productRow1-1.webp" alt="" class="product-image">
                                    </div>
                                    <div class="prodcut-cart-title">
                                        Tai nghe không dây VitogTWS Tai nghe Bluetooth Tai nghe Bass Tai nghe thể thao Air Tai nghe có Mic
                                    </div>
                                    <div class="product-cart-price flex-center default">
                                        <div class="prodcut-price_icon-cart flex-center w-full h-full">
                                            <span class="text-VND">₫</span>
                                            <span class="text-base" style="line-height: 20px;">50.000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        const modal = document.createElement('div');
        modal.classList.add('wrap-modal_cart');
        modal.innerHTML = modalHTML;
        wrapShoppeCart.appendChild(modal);
    });

    wrapShoppeCart.addEventListener('mouseout', () => {
        const modal = document.querySelector('.wrap-modal_cart');
        if (modal) {
            modal.remove();
        }
    });
});
