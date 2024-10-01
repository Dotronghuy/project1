const admin = document.getElementById("admin");
const openButton = document.querySelector(".open-item");
const containerBodyAdmin = document.querySelector(".container-body_admin");
function createSidebar() {
    const sidebarHTML = `
        <div id="sidebar" class="sidebar">
            <div class="close-item">&times;</div>
            <a  id="user-link">User</a>
            <a  id="products-link">Products</a>
            <a  id="orders-link">Đơn hàng</a>
        </div>
    `;
    const sidebarContainer = document.createElement("div");
    sidebarContainer.innerHTML = sidebarHTML;

    document.body.appendChild(sidebarContainer);

    const closeButton = document.querySelector(".close-item");
    const sidebar = document.getElementById("sidebar");


    function openNav() {
        sidebar.style.width = "350px";
        admin.style.visibility = "hidden";
    }

    function closeNav() {
        sidebar.style.width = "0";
        admin.style.visibility = "visible";
    }

    function clearTable() {
        const existingTable = document.getElementById("dynamic-table");
        if (existingTable) {
            existingTable.classList.remove('active');
            existingTable.addEventListener('transitionend', function () {
                existingTable.remove();
            });
        }
    }
    window.createUserTable = async function () {
        clearTable();
        const userTable = document.createElement("div");
        userTable.id = "dynamic-table";
        userTable.classList.add("wrap-admin");

        try {
            const response = await fetch('/admin/users');
            const users = await response.json();
            let userRows = '';
            users.forEach((user, index) => {
                userRows += `
                <div class="table-body-user community-body " data-id="${user._id}">
                    <div class="infor-user infor-stt">${index + 1}</div>
                    <div class="infor-user infor-name">${user.userKey.split('@')[0]}</div>
                    <div class="infor-user infor-email">${user.userKey}</div>
                    <div class="infor-user infor-admin">${user.isAdmin ? 'Yes' : 'No'}</div>
                    <select class="infor-handle">
                        <option value="option1">Hành động</option>
                        <option value="delete-user" class="delete-user">Xóa</option>
                        <option value="${user.isAdmin ? 'demote-admin' : 'make-admin'}" class="update-user">${user.isAdmin ? 'Hạ cấp Admin' : 'Bổ nhiệm Admin'}</option>
                    </select>
                </div>
            `;
            });

            userTable.innerHTML = `
            <div class="desc-users desc-admin">
                <h2 class="title-wrap-admin">Danh sách User</h2>
                <div class="table-desc-user">
                    <div class="table-user table-admin">
                        <div class="table-header-user community-header">
                            <div>STT</div>
                            <div>Tên User</div>
                            <div>Email</div>
                            <div>Admin</div>
                            <div>Thao tác</div>
                        </div>
                        ${userRows}
                    </div>
                </div>
            </div>
        `;
            containerBodyAdmin.appendChild(userTable);
            setTimeout(() => userTable.classList.add('active'), 10);

            document.querySelectorAll('.infor-handle').forEach(select => {
                select.addEventListener('change', async function () {
                    const action = this.value;
                    const userId = this.closest('.community-body').getAttribute('data-id');
                    if (action === 'delete-user') {
                        await deleteItem('user', userId);
                    } else if (action === 'make-admin' || action === 'demote-admin') {
                        const isAdmin = action === 'make-admin';
                        await toggleAdmin(userId, isAdmin);
                        createUserTable();
                    }
                });
            });
        } catch (e) {
            console.error(e);
        }


    }
    async function createProductsTable() {
        clearTable();
        const productsTable = document.createElement("div");
        productsTable.id = "dynamic-table";
        productsTable.classList.add("wrap-admin");

        try {
            const response = await fetch('/admin/products');
            const products = await await response.json();

            let productRow = '';
            products.forEach((product, index) => {
                productRow += `
                <div class="table-body-products community-body" data-id="${product._id}">
                            <div class="infor-products products-stt">${index + 1}</div>
                            <div class="infor-products products-name">${product.title}</div>
                            <div class="infor-products products-image"><img src="${product.image}" class="products-img"></div>
                            <div class="infor-products products-price">${product.price}</div>
                            <div class="infor-products products-quantity">${product.available}</div>
                            <select class="infor-products products-handle">
                                <option value="option1">Hành động</option>
                                <option value="delete-product" class="delete-products">Xóa</option>
                                <option value="update-product" class="update-products">Sửa</option>
                            </select>
                </div>
                `
            });
            productsTable.innerHTML = `
                <div class="desc-products desc-admin">
                    <h2 class="title-wrap-admin">Danh sách Products</h2>
                    <button class="btn-add-products">Thêm sản phẩm</button>
                    <div class="table-desc-products">
                        <div class="table-products table-admin">
                            <div class="table-header-products community-header">
                                <div>STT</div>
                                <div>Tên sản phẩm</div>
                                <div>hình ảnh</div>
                                <div>Giá</div>
                                <div>Số lượng</div>
                                <div>Thao tác</div>
                            </div>
                            ${productRow}
                        </div>
                    </div>
                </div>
            `;
            containerBodyAdmin.appendChild(productsTable);
            setTimeout(() => productsTable.classList.add('active'), 10);



            document.querySelectorAll('.products-handle').forEach(select => {
                select.addEventListener('change', async function () {
                    const action = this.value;
                    const productId = this.closest('.community-body').getAttribute('data-id');
                    if (action === 'delete-product') {
                        await deleteItem('product', productId);
                    } else if (action === 'update-product') {
                        window.location.href = `/admin/edit-product/${productId}`;
                    }
                });
            });

            document.querySelector(".btn-add-products").addEventListener("click", function () {
                window.location.href = "/add_product";
            });
            console.log(document.querySelectorAll('.btn-add-products'));

        } catch (e) {
            console.error(e);
        }
    }

    async function toggleAdmin(userId, isAdmin) {
        try {
            const response = await fetch(`/admin/user/${userId}/toggleAdmin`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ isAdmin }),
            });
            const result = await response.json();
            console.log(result);
        } catch (e) {
            console.error(e);
        }
    }

    async function deleteItem(type, id) {
        try {
            const response = await fetch(`/admin/delete/${type}/${id}`, {
                method: 'DELETE',
            });
            const result = await response.json();
            if (result.success) {
                if (type === 'user') {
                    await createUserTable();
                } else if (type === 'product') {
                    await createProductsTable();
                }
            }
        } catch (e) {
            console.error(e);
        }
    }

    function createOrderCartTable() {
        clearTable();
        const orderCartTable = document.createElement("div");
        orderCartTable.id = "dynamic-table";
        orderCartTable.classList.add("wrap-admin");
        orderCartTable.innerHTML = `
            <div class="desc-users desc-admin">
                <h2 class="title-wrap-admin">Chưa hoàn thiện</h2>
            </div>
        `;
        containerBodyAdmin.appendChild(orderCartTable);
        setTimeout(() => orderCartTable.classList.add('active'), 10);

    }
    document.getElementById("user-link").addEventListener("click", (e) => {
        e.preventDefault();
        createUserTable();
        closeNav();
    });
    document.getElementById("products-link").addEventListener("click", (e) => {
        e.preventDefault();
        createProductsTable();
        closeNav();
    });
    document.getElementById("orders-link").addEventListener("click", (e) => {
        e.preventDefault();
        createOrderCartTable();
        closeNav();
    });


    openButton.addEventListener("click", openNav);
    closeButton.addEventListener("click", closeNav);


}

window.onload = function () {
    createSidebar();
    createUserTable();
};


