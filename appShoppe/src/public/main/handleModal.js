document.addEventListener("DOMContentLoaded", () => {
    const wrapShoppeCart = document.querySelector('.wrap-shoppe_cart');
    const cartCountElement = document.querySelector('.cart-count');

    async function fetchCartData() {
        try {
            const response = await fetch('/api/cart-modal-data');
            const data = await response.json();
            return data;
        } catch (e) {
            console.error('Lỗi khi lấy dữ liệu: ', e);
            return { products: [] };
        }
    }

    async function updateCartCount() {
        try {
            const response = await fetch('/api/cart-item-count');
            const data = await response.json();
            const count = data.count;

            if (count > 0) {
                cartCountElement.textContent = count;
                cartCountElement.style.display = 'inline';
            } else {
                cartCountElement.style.display = 'none';
            }
        } catch (error) {
            console.error('Lỗi khi lấy số lượng sản phẩm: ', error);
        }
    }


    async function createModal() {
        const cookies = document.cookie.split('; ');
        const userKeyCookie = cookies.find(cookie => cookie.startsWith('userKey='));
        const userKey = userKeyCookie ? decodeURIComponent(userKeyCookie.split('=')[1]) : null;

        let modalHTML = '';
        if (!userKey) {
            modalHTML = `
                <div class="modal-cart">
                    <div class="desc-modal">
                        <img src="wrapperImage/img/bags.png" alt="" class="modal-cart_avatar">
                        <div class="text-cart">
                            <p>Đăng nhập để xem giỏ hàng</p>
                        </div>
                    </div>
                </div>
            `;
        } else {
            const cartData = await fetchCartData();
            const products = cartData.products;

            if (products.length === 0) {
                modalHTML = `
                <div class="modal-cart">
                    <div class="desc-modal">
                        <div class="text-cart">
                            <img src="wrapperImage/img/bags.png" alt="" class="modal-cart_avatar">
                            <p>Giỏ hàng trống</p>
                        </div>
                    </div>
                </div>
                `
            } else {
                modalHTML = `
                <div class="modal-cart">
                    <div class="desc-modal flex-col">
                        <h3 class="title-modal-cart">Sản phẩm mới thêm</h3>
                        <div class="products-cart-modal flex-center w-full">
                            ${products.map(product => `
                                <a href="/products/${encodeURIComponent(product.title)}" class="products-cart-item flex-center w-full h-full default">
                                    <div class="prodcut-cart-image">
                                        <img src="${product.image || 'default-image-url'}" alt="" class="product-image">
                                    </div>
                                    <div class="prodcut-cart-title">
                                        ${product.title}
                                    </div>
                                    <div class="product-cart-price flex-center default">
                                        <div class="prodcut-price_icon-cart flex-center w-full h-full">
                                            <span class="text-VND">₫</span>
                                            <span class="text-base" style="line-height: 20px;">${product.price}</span>
                                        </div>
                                    </div>
                                </a>
                            `).join('')}
                        </div>
                    </div>
                </div>
                `;
            }
        }

        const modal = document.createElement('div');
        modal.classList.add('wrap-modal_cart', 'size-modal', 'arrow-up');
        modal.innerHTML = modalHTML;
        wrapShoppeCart.appendChild(modal);

        const modalElement = document.querySelector('.wrap-modal_cart');
        modalElement.addEventListener('mouseenter', () => {
            modalElement.style.display = 'block';
        });
        modalElement.addEventListener('mouseleave', () => {
            removeModal();
        });
    }

    function removeModal() {
        const modal = document.querySelector('.wrap-modal_cart');
        if (modal) {
            modal.remove();
        }
    }

    wrapShoppeCart.addEventListener('mouseenter', () => {
        if (!document.querySelector('.wrap-modal_cart')) {
            createModal();
        }
    });

    wrapShoppeCart.addEventListener('mouseleave', (e) => {
        const relatedTarget = e.relatedTarget;
        if (relatedTarget && (relatedTarget.closest('.wrap-modal_cart') || relatedTarget === wrapShoppeCart)) {
            return;
        }
        removeModal();
    });

    document.addEventListener('mouseenter', (e) => {
        if (e.target.closest('.wrap-modal_cart') || e.target.closest('.wrap-shoppe_cart')) {
            if (!document.querySelector('.wrap-modal_cart')) {
                createModal();
            }
        }
    });

    // Cập nhật số lượng sản phẩm khi trang được tải
    updateCartCount();

});
