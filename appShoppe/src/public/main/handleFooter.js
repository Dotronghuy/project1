const contentCareclient = document.querySelector('.content-careclient');

const mergedData = [
    {
        header: "Thời trang nam",
        content: [
            { title: "Áo khoác |" },
            { title: "Áo vest và Blazer |" },
            { title: "Áo Hoodie, Áo Len & Áo Nỉ |" },
            { title: "Quần Jeans |" },
            { title: "Quần Dài/Quần Âu |" },
            { title: "Quần Short |" },
            { title: "Áo |" },
            { title: "Áo Ba Lỗ |" },
            { title: "Đồ Lót |" },
            { title: "Đồ Ngủ |" },
            { title: "Đồ Bộ |" },
            { title: "Vớ/Tất |" },
            { title: "Trang Phục Truyền Thống |" },
            { title: "Đồ Hóa Trang |" },
            { title: "Trang Phục Ngành Nghề |" },
            { title: "Khác |" },
            { title: "Trang Sức Nam |" },
            { title: "Kính Mắt Nam |" },
            { title: "Thắt Lưng Nam |" },
            { title: "Cà vạt & Nơ cổ |" },
            { title: "Phụ Kiện Nam " },
        ],
    },
    {
        header: "Nhà Cửa & Đời Sống",
        content: [
            { title: "Chăn, Ga, Gối & Nệm |" },
            { title: "Đồ nội thất |" },
            { title: "Trang trí nhà cửa |" },
            { title: "Dụng cụ & Thiết bị tiện ích |" },
            { title: "Đồ dùng nhà bếp và hộp đựng thực phẩm |" },
            { title: "Đèn |" },
            { title: "Ngoài trời & Sân vườn |" },
            { title: "Đồ dùng phòng tắm |" },
            { title: "Vật phẩm thờ cúng |" },
            { title: "Đồ trang trí tiệc |" },
            { title: "Chăm sóc nhà cửa và giặt ủi |" },
            { title: "Sắp xếp nhà cửa |" },
            { title: "Dụng cụ pha chế |" },
            { title: "Tinh dầu thơm phòng |" },
            { title: "Đồ dùng phòng ăn " },
        ]
    },
    {
        header: "Đồng Hồ",
        content: [
            { title: "Đồng Hồ Nam |" },
            { title: "Đồng Hồ Nữ |" },
            { title: "Bộ Đồng Hồ & Đồng Hồ Cặp |" },
            { title: "Đồng Hồ Trẻ Em |" },
            { title: "Phụ Kiện Đồng Hồ |" },
            { title: "Khác " },
        ]
    },
    {
        header: "Phụ Kiện & Trang Sức Nữ",
        content: [
            { title: "Nhẫn |" },
            { title: "Bông tai |" },
            { title: "Khăn choàng |" },
            { title: "Găng tay |" },
            { title: "Phụ kiện tóc |" },
            { title: "Vòng tay & Lắc tay |" },
            { title: "Lắc chân |" },
            { title: "Mũ |" },
            { title: "Dây chuyền |" },
            { title: "Kính mắt |" },
            { title: "Kim loại quý |" },
            { title: "Thắt lưng |" },
            { title: "Cà vạt & Nơ cổ |" },
            { title: "Phụ kiện thêm |" },
            { title: "Bộ phụ kiện |" },
            { title: "Khác |" },
            { title: "Vớ/ Tất |" },
            { title: "Ô/Dù " },
        ]
    },
    {
        header: "Balo & Túi Ví Nam",
        content: [
            { title: "Ba Lô Nam |" },
            { title: "Ba Lô Laptop Nam |" },
            { title: "Túi & Cặp Đựng Laptop |" },
            { title: "Túi Chống Sốc Laptop Nam |" },
            { title: "Túi Tote Nam |" },
            { title: "Cặp Xách Công Sở Nam |" },
            { title: "Ví Cầm Tay Nam |" },
            { title: "Túi Đeo Hông & Túi Đeo Ngực Nam |" },
            { title: "Túi Đeo Chéo Nam |" },
            { title: "Bóp/Ví Nam |" },
            { title: "Khác " },

        ]
    },
    {
        header: "Voucher & Dịch Vụ",
        content: [
            { title: "Nhà hàng & Ăn uống | |" },
            { title: "Sự kiện & Giải trí |" },
            { title: "Nạp tiền tài khoản |" },
            { title: "Sức khỏe & Làm đẹp |" },
            { title: "Gọi xe |" },
            { title: "Khóa học |" },
            { title: "Du lịch & Khách sạn |" },
            { title: "Mua sắm |" },
            { title: "Mã quà tặng Shopee |" },
            { title: "Thanh toán hóa đơn |" },
            { title: "Dịch vụ khác " },
        ]
    },
    {
        header: "Thời Trang Nữ",
        content: [
            { title: "Quần |" },
            { title: "Quần đùi |" },
            { title: "Chân váy |" },
            { title: "Quần jeans |" },
            { title: "Đầm/Váy |" },
            { title: "Váy cưới |" },
            { title: "Áo khoác, Áo choàng & Vest |" },
            { title: "Áo len & Cardigan |" },
            { title: "Hoodie và Áo nỉ |" },
            { title: "Bộ |" },
            { title: "Đồ lót |" },
            { title: "Đồ ngủ |" },
            { title: "Áo |" },
            { title: "Đồ tập |" },
            { title: "Đồ truyền thống |" },
            { title: "Đồ hóa trang |" },
            { title: "Vải |" },
            { title: "Vớ/ Tất |" },
            { title: "Khác " },
        ]
    },
    {
        header: "Máy Tính & Laptop",
        content: [
            { title: "Máy Tính Bàn |" },
            { title: "Màn Hình |" },
            { title: "Linh Kiện Máy Tính |" },
            { title: "Thiết Bị Lưu Trữ |" },
            { title: "Thiết Bị Mạng |" },
            { title: "Máy In, Máy Scan & Máy Chiếu |" },
            { title: "Phụ Kiện Máy Tính |" },
            { title: "Laptop |" },
            { title: "Khác |" },
            { title: "Gaming " },
        ]
    },
    {
        header: "Giày Dép Nữ",
        content: [
            { title: "Bốt |" },
            { title: "Giày Thể Thao/ Sneaker |" },
            { title: "Giày Đế Bằng |" },
            { title: "Giày Cao Gót |" },
            { title: "Giày Đế Xuồng |" },
            { title: "Phụ Kiện Giày |" },
            { title: "Giày Khác " },
        ]
    },
    {
        header: "Thể Thao & Du Lịch",
        content: [
            { title: "Vali |" },
            { title: "Túi du lịch |" },
            { title: "Phụ kiện du lịch |" },
            { title: "Dụng Cụ Thể Thao & Dã Ngoại |" },
            { title: "Giày Thể Thao |" },
            { title: "Thời Trang Thể Thao & Dã Ngoại |" },
            { title: "Phụ Kiện Thể Thao & Dã Ngoại |" },
            { title: "Khác " },
        ]
    },
    {
        header: "Thời Trang Trẻ Em",
        content: [
            { title: "Trang phục bé trai |" },
            { title: "Trang phục bé gái |" },
            { title: "Giày dép bé trai |" },
            { title: "Giày dép bé gái |" },
            { title: "Khác |" },
            { title: "Quần áo em bé |" },
            { title: "Giày tập đi & Tất sơ sinh |" },
            { title: "Phụ kiện trẻ em " },
        ]
    },
    {
        header: "Dụng cụ và thiết bị tiện ích",
        content: [
            { title: "Dụng cụ cầm tay |" },
            { title: "Dụng cụ điện và thiết bị lớn |" },
            { title: "Thiết bị mạch điện |" },
            { title: "Vật liệu xây dựng |" },
            { title: "Thiết bị và phụ kiện xây dựng " },
        ]
    },
    {
        header: "Điện Thoại & Phụ Kiện",
        content: [
            { title: "Điện thoại |" },
            { title: "Máy tính bảng |" },
            { title: "Pin Dự Phòng |" },
            { title: "Pin Gắn Trong, Cáp và Bộ Sạc |" },
            { title: "Ốp lưng, bao da, Miếng dán điện thoại |" },
            { title: "Bảo vệ màn hình |" },
            { title: "Đế giữ điện thoại |" },
            { title: "Thẻ nhớ |" },
            { title: "Sim |" },
            { title: "Phụ kiện khác |" },
            { title: "Thiết bị khác " },
        ]
    },
    {
        header: "Sắc Đẹp",
        content: [
            { title: "Chăm sóc da mặt |" },
            { title: "Tắm & chăm sóc cơ thể |" },
            { title: "Trang điểm |" },
            { title: "Chăm sóc tóc |" },
            { title: "Dụng cụ & Phụ kiện Làm đẹp |" },
            { title: "Vệ sinh răng miệng |" },
            { title: "Nước hoa |" },
            { title: "Chăm sóc nam giới |" },
            { title: "Khác |" },
            { title: "Chăm sóc phụ nữ |" },
            { title: "Bộ sản phẩm làm đẹp " },
        ]
    },
    {
        header: "Giày Dép Nam",
        content: [
            { title: "Bốt |" },
            { title: "Giày Thể Thao/ Sneaker |" },
            { title: "Giày Sục |" },
            { title: "Giày Tây Lười |" },
            { title: "Giày Oxfords & Giày Buộc Dây |" },
            { title: "Xăng-đan và Dép |" },
            { title: "Phụ kiện giày dép |" },
            { title: "Khác " },
        ]
    },
    {
        header: "Bách Hóa Online",
        content: [
            { title: "Đồ ăn vặt |" },
            { title: "Đồ chế biến sẵn |" },
            { title: "Nhu yếu phẩm |" },
            { title: "Nguyên liệu nấu ăn |" },
            { title: "Đồ làm bánh |" },
            { title: "Sữa - trứng |" },
            { title: "Đồ uống |" },
            { title: "Ngũ cốc & mứt |" },
            { title: "Các loại bánh |" },
            { title: "Đồ uống có cồn |" },
            { title: "Bộ quà tặng |" },
            { title: "Thực phẩm tươi sống và thực phẩm đông lạnh |" },
            { title: "Khác " },
        ]
    },
    {
        header: "Đồ Chơi",
        content: [
            { title: "Sở thích & Sưu tầm |" },
            { title: "Đồ chơi giải trí |" },
            { title: "Đồ chơi giáo dục |" },
            { title: "Đồ chơi cho trẻ sơ sinh & trẻ nhỏ |" },
            { title: "Đồ chơi vận động & ngoài trời |" },
            { title: "Búp bê & Đồ chơi nhồi bông " },
        ]
    },
    {
        header: "Mẹ & Bé ",
        content: [
            { title: "Đồ dùng du lịch cho bé |" },
            { title: "Đồ dùng ăn dặm cho bé |" },
            { title: "Phụ kiện cho mẹ |" },
            { title: "Chăm sóc sức khỏe mẹ |" },
            { title: "Đồ dùng phòng tắm & Chăm sóc cơ thể bé |" },
            { title: "Đồ dùng phòng ngủ cho bé |" },
            { title: "An toàn cho bé |" },
            { title: "Thực phẩm cho bé |" },
            { title: "Chăm sóc sức khỏe bé |" },
            { title: "Tã & bô em bé |" },
            { title: "Đồ chơi |" },
            { title: "Bộ & Gói quà tặng |" },
            { title: "Khác |" },
            { title: "Sữa công thức trên 24 tháng |" },
            { title: "Sữa công thức 0-24 tháng tuổi " },
        ]
    },
    {
        header: "Máy Ảnh & Máy Quay Phim",
        content: [
            { title: "Máy ảnh - Máy quay phim |" },
            { title: "Camera giám sát & Camera hệ thống |" },
            { title: "Thẻ nhớ |" },
            { title: "Ống kính |" },
            { title: "Phụ kiện máy ảnh |" },
            { title: "Máy bay camera & Phụ kiện " },
        ]
    },
    {
        header: "Túi Ví Nữ",
        content: [
            { title: "Ba Lô Nữ |" },
            { title: "Cặp Laptop |" },
            { title: "Ví Dự Tiệc & Ví Cầm Tay |" },
            { title: "Túi Đeo Hông & Túi Đeo Ngực |" },
            { title: "Túi Tote |" },
            { title: "Túi Quai Xách |" },
            { title: "Túi Đeo Chéo & Túi Đeo Vai |" },
            { title: "Ví/Bóp Nữ |" },
            { title: "Phụ Kiện Túi |" },
            { title: "Khác " },
        ]
    },
    {
        header: "Ô Tô & Xe Máy & Xe Đạp",
        content: [
            { title: "Xe đạp, xe điện |" },
            { title: "Mô tô, xe máy |" },
            { title: "Xe Ô tô |" },
            { title: "Mũ bảo hiểm |" },
            { title: "Phụ kiện xe máy |" },
            { title: "Phụ kiện xe đạp |" },
            { title: " Phụ kiện bên trong ô tô |" },
            { title: "Dầu nhớt & dầu nhờn |" },
            { title: "Phụ tùng ô tô |" },
            { title: "Phụ tùng xe máy |" },
            { title: "Phụ kiện bên ngoài ô tô |" },
            { title: "Chăm sóc ô tô |" },
            { title: "Dịch vụ cho xe " },
        ]
    },
    {
        header: "Giặt Giũ & Chăm Sóc Nhà Cửa",
        content: [
            { title: "Giặt Giũ & Chăm Sóc Nhà Cửa |" },
            { title: "Giấy vệ sinh, khăn giấy |" },
            { title: "Vệ sinh nhà cửa |" },
            { title: "Vệ sinh bát đĩa |" },
            { title: "Dụng cụ vệ sinh |" },
            { title: "Chất khử mùi, làm thơm |" },
            { title: "Thuốc diệt côn trùng |" },
            { title: "Túi, màng bọc thực phẩm |" },
            { title: "Bao bì, túi đựng rác " },
        ]
    },
    {
        header: "Thiết Bị Điện Tử",
        content: [
            { title: "Thiết bị đeo thông minh |" },
            { title: "Phụ kiện tivi |" },
            { title: "Máy Game Console |" },
            { title: "Phụ kiện Console |" },
            { title: "Đĩa game  |" },
            { title: "Linh phụ kiện |" },
            { title: "Tai nghe nhét tai |" },
            { title: "Loa |" },
            { title: "Tivi |" },
            { title: "Tivi box |" },
            { title: "Headphones " },
        ]
    },
    {
        header: "Sức Khỏe",
        content: [
            { title: "Vật tư y tế |" },
            { title: "Chống muỗi & xua đuổi côn trùng |" },
            { title: "Thực phẩm chức năng |" },
            { title: "Tã người lớn |" },
            { title: "Hỗ trợ làm đẹp |" },
            { title: "Hỗ trợ tình dục |" },
            { title: "Dụng cụ massage và trị liệu |" },
            { title: "Khác " },
        ]
    },
    {
        header: "Thiết Bị Điện Gia Dụng",
        content: [
            { title: "Đồ gia dụng nhà bếp |" },
            { title: "Đồ gia dụng lớn |" },
            { title: "Máy hút bụi & Thiết bị làm sạch |" },
            { title: "Quạt & Máy nóng lạnh |" },
            { title: "Thiết bị chăm sóc quần áo |" },
            { title: "Khác |" },
            { title: "Máy xay, ép, máy đánh trứng trộn bột, máy xay thực phẩm |" },
            { title: "Bếp điện " },
        ]
    },
    {
        header: "Nhà Sách Online",
        content: [
            { title: "Sách Tiếng Việt |" },
            { title: "Sách ngoại văn |" },
            { title: "Gói Quà |" },
            { title: "Bút viết |" },
            { title: "Dụng cụ học sinh & văn phòng |" },
            { title: "Màu, Họa Cụ và Đồ Thủ Công |" },
            { title: "Sổ và Giấy Các Loại |" },
            { title: "Quà Lưu Niệm |" },
            { title: "Nhạc cụ và phụ kiện âm nhạc " },
        ]
    },
    {
        header: "Chăm Sóc Thú Cưng",
        content: [
            { title: "Thức ăn cho thú cưng |" },
            { title: "Phụ kiện cho thú cưng |" },
            { title: "Vệ sinh cho thú cưng |" },
            { title: "Quần áo thú cưng |" },
            { title: " Chăm sóc sức khỏe |" },
            { title: "Làm đẹp cho thú cưng |" },
            { title: "Khác " },
        ]
    },
];

const footerCareClient = {
    infoCareClient: mergedData,
    render: function () {
        const groupSize1 = 6; // Kích thước nhóm đầu tiên
        const groupSize2 = 5; // Kích thước nhóm thứ hai
        const columnsHtml = [];


        for (let i = 0; i < 2; i++) {
            const start = i * groupSize1; // Vị trí bắt đầu của nhóm
            const groupedData1 = this.infoCareClient.slice(start, start + groupSize1);
            if (groupedData1.length > 0) {
                columnsHtml.push(`
                    <div class="desc-careclient">
                        ${groupedData1.map((info) => {
                    return `
                                <div class="desc-careclient_column">
                                    <div class="header-column">
                                        <a href="">${info.header}</a>
                                    </div>
                                    <div class="product-column">
                                        <div>
                                            ${info.content.map(item => `
                                                <a href="" class="item-column">${item.title}</a>
                                            `).join('')}
                                        </div>
                                    </div>
                                </div>
                            `;
                }).join("")}
                    </div>
                `);
            }
        }


        for (let i = 2; i < 5; i++) {
            const start = i * groupSize2; // Vị trí bắt đầu của nhóm
            const groupedData2 = this.infoCareClient.slice(start, start + groupSize2);
            if (groupedData2.length > 0) {
                columnsHtml.push(`
                    <div class="desc-careclient">
                        ${groupedData2.map((info) => {
                    return `
                                <div class="desc-careclient_column">
                                    <div class="header-column">
                                        <a href="">${info.header}</a>
                                    </div>
                                    <div class="product-column">
                                        <div>
                                            ${info.content.map(item => `
                                                <a href="" class="item-column">${item.title}</a>
                                            `).join('')}
                                        </div>
                                    </div>
                                </div>
                            `;
                }).join("")}
                    </div>
                `);
            }
        }

        contentCareclient.innerHTML = columnsHtml.join("");
    },
    start: function () {
        this.render();
    }
}

footerCareClient.start();



const contentPolicy = document.querySelector('.desc-more_shoppe');
const dataFooter = document.querySelector('.desc-more_shoppe-desc');
const dataShoppeHelp = [
    {
        header: "CHĂM SÓC KHÁCH HÀNG",
        item: [
            { title: "Trung Tâm Trợ Giúp" },
            { title: "Shopee Blog" },
            { title: "Shopee Mall" },
            { title: "Hướng Dẫn Mua Hàng" },
            { title: "Hướng Dẫn Bán Hàng" },
            { title: "Thanh Toán" },
            { title: "Shopee Xu" },
            { title: "Vận Chuyển" },
            { title: "Trả Hàng & Hoàn Tiền" },
            { title: "Chăm Sóc Khách Hàng" },
            { title: "Chính Sách Bảo Hành" },
        ]
    },
    {
        header: "VỀ SHOPEE",
        item: [
            { title: "Giới Thiệu Về Shopee Việt Nam" },
            { title: "Tuyển Dụng" },
            { title: "Điều Khoản Shopee" },
            { title: "Chính Sách Bảo Mật" },
            { title: "Chính Hãng" },
            { title: "Kênh Người Bán" },
            { title: "Flash Sales" },
            { title: "Chương Trình Tiếp Thị Liên Kết Shopee" },
            { title: "Liên Hệ Với Truyền Thông" },
        ]
    },
    {
        header: "THANH TOÁN",
        item: [
            { img: "/wrapperImage/img/visa.png" },
            { img: "/wrapperImage/img/thanh toán 2.png" },
            { img: "/wrapperImage/img/thanh toán jcb.png" },
            { img: "/wrapperImage/img/thanh toán 3.png" },
            { img: "/wrapperImage/img/thanh toán 4.png" },
            { img: "/wrapperImage/img/trả góp.png" },
            { img: "/wrapperImage/img/shoppepay.png" },
            { img: "/wrapperImage/img/spaylater.png" },
        ]
    },
    {
        header: "Đơn vị vận chuyển",
        item: [
            { img: "/wrapperImage/img/ship spx.png" },
            { img: "/wrapperImage/img/ship ghtk.png" },
            { img: "/wrapperImage/img/vn-50009109-64f0b242486a67a3d29fd4bcf024a8c6.png" },
            { img: "/wrapperImage/img/ship viettel.png" },
            { img: "/wrapperImage/img/ship vietnam.png" },
            { img: "/wrapperImage/img/ship J.png" },
            { img: "/wrapperImage/img/ship grab.png" },
            { img: "/wrapperImage/img/ship ninjja.png" },
            { img: "/wrapperImage/img/ship best.png" },
            { img: "/wrapperImage/img/ship be.png" },
            { img: "/wrapperImage/img/ship ahamove.png" },
        ]
    },
    {
        header: "THEO DÕI CHÚNG TÔI TRÊN",
        item: [
            { img: "/wrapperImage/img/facebook.png", title: "Facebook" },
            { img: "/wrapperImage/img/intagram.png", title: "Instagram" },
            { img: "/wrapperImage/img/linded.png", title: "LinkedIn" },
        ]
    },
    {
        header: "TẢI ỨNG DỤNG SHOPEE NGAY",
        imgQR: "/wrapperImage/img/mã qr.png",
        item: [
            { img: "/wrapperImage/img/apple.png" },
            { img: "/wrapperImage/img/chplay.png" },
            { img: "/wrapperImage/img/gallery.png" },
        ]
    }
]

const renderFooter = {
    renderFooter: dataShoppeHelp,
    render: function () {
        const htmls = this.renderFooter.map((info, index) => {
            if (info.header === "TẢI ỨNG DỤNG SHOPEE NGAY") {
                // Render phần tải ứng dụng Shopee
                return `
                    <div class="desc-more_shoppe-desc--column">
                        <div class="header-desc_cloumn">${info.header}</div>
                        <div class="shoppe-code">
                            <a href="" class="item-shoppe_code">
                                <img src="${info.imgQR}" alt="">
                            </a>
                            <div class="lists-app_dowload">
                                ${info.item.map(itemTitle => `
                                    <a href="" class="list-app_dowload">
                                        <img src="${itemTitle.img}" alt=""
                                            style="max-width: 100%; max-height: 100%;">
                                    </a>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `;
            } else if (info.header === "THANH TOÁN") {
                // Render phần thanh toán và đơn vị vận chuyển thành 2 hàng trong 1 cột
                const shippingInfo = this.renderFooter.find(item => item.header === "Đơn vị vận chuyển");
                return `
                    <div class="desc-more_shoppe-desc--column">
                        <div class="header-desc_cloumn">${info.header}</div>
                        <ul class="content-desc_cloumn-item">
                            ${info.item.map(itemTitle => `
                                <li class="list-item_help-desc">
                                    <a href="" class="avatar-item_help-desc">
                                        <img src="${itemTitle.img}" alt="" class="avatar-help_desc">
                                    </a>
                                </li>
                            `).join('')}
                        </ul>
                        <div class="header-desc_cloumn">${shippingInfo.header}</div>
                        <ul class="content-desc_cloumn-item">
                            ${shippingInfo.item.map(itemTitle => `
                                <li class="list-item_help-desc">
                                    <a href="" class="avatar-item_help-desc">
                                        <img src="${itemTitle.img}" alt="" class="avatar-help_desc">
                                    </a>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                `;
            } else if (info.header === 'THEO DÕI CHÚNG TÔI TRÊN') {
                return `
                <div class="desc-more_shoppe-desc--column">
                    <div class="header-desc_cloumn">${info.header}</div>
                    <ul class="content-desc_cloumn">
                        ${info.item.map(itemTitle => `
                            <li class="item-content-desc_cloumn flex-item_column">
                                <a href="" class="item-help_desc flex-item_column">
                                    <img src="${itemTitle.img}" alt="" class="contact-shoppe">
                                        <span>${itemTitle.title}</span>
                                </a>
                            </li>
                            `).join('')}
                    </ul>
                </div>
                `
            } else if (info.header !== "Đơn vị vận chuyển") {
                return ` 
                    <div class="desc-more_shoppe-desc--column">
                        <div class="header-desc_cloumn">${info.header}</div>
                        <ul class="content-desc_cloumn">
                            ${info.item.map(itemTitle => `
                                <li class="item-content-desc_cloumn flex-item_column">
                                    <a href="" class="item-help_desc">
                                        <span>${itemTitle.title}</span>
                                    </a>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                `;
            }
        });
        dataFooter.innerHTML = htmls.join("");
    },
    start: function () {
        this.render();
    }
}

renderFooter.start();




const dataPolicyArea = [
    {
        titleSpan: "© 2024 Shopee. Tất cả các quyền được bảo lưu.",
        titleNation: "Quốc gia & Khu vực:",
        area: [
            { nation: "Singapore |" },
            { nation: "Indonesia |" },
            { nation: "Thái Lan |" },
            { nation: "Malaysia |" },
            { nation: "Việt Nam |" },
            { nation: "Philippines |" },
            { nation: "Brazil |" },
            { nation: "México |" },
            { nation: "Colombia |" },
            { nation: "Chile |" },
            { nation: "Đài Loan" },
        ]
    }
];

const footerPolicyArea = {
    infoPolicyArea: dataPolicyArea,
    render: function () {
        const htmls = this.infoPolicyArea.map(info => {
            return `
                 <div class="desc-more_shoppe-area ">
                    <div class="desc-shoppe_area line-heigth">
                        <span style="margin-left: 8px;">${info.titleSpan}</span>
                    </div>
                    <div class="shoppe-area line-heigth">
                        <div class="nation">${info.titleNation}</div>
                        <div class="area">
                        ${info.area.map(item => `
                            <a href="" class="line-height">${item.nation}</a>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;

        });
        contentPolicy.innerHTML += htmls.join("");
    },
    start: function () {
        this.render();
    }

}

footerPolicyArea.start();






