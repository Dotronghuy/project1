const express = require("express");
const Uploads = require("../middleware/upload");
const Products = require("../app/models/products");
const user = require('./user');
const cart = require('./cart');
const router = express.Router();
const showproduct = require("./showproducts");
const admin = require("./admin");

// render view products
router.use("/products", showproduct);
router.use('/register', user);
router.use('/', user);


// render view login and register
router.get("/login", function (req, res) {
  res.render("login", { layout: "login" });
});


// handle logic login and register


router.get("/register", function (req, res) {
  res.render("register", { layout: "register" });
});



// logic upp load products

router.get("/add_product", function (req, res) {
  const user = req.session.user;
  const username = user ? user.name : null;
  res.render("products/upload", {
    layout: "upload",
    userKey: username,
  });
});

// const flagImages = {
//   1: "/imageJS/flagmall-handleshoppe.png",
//   2: "/imageJS/flagmall.png",
//   3: "/imageJS/flaglove+.png",
//   4: "/imageJS/flaghandleshoppe.png",
//   5: "/imageJS/flaglove.png",
// };
// const utilitiesImage = {
//   1: "/imageJS/inforPromotion1.png",
//   2: "/imageJS/inforPromotion2.png",
//   3: "/imageJS/inforPromotion3.png",
//   4: "/imageJS/inforPromotion4.png",
//   5: "/imageJS/inforPromotion5.png",
//   6: "/imageJS/inforPromotion6.png",
// };

router.post("/add-product", Uploads.fields([
  { name: 'image', maxCount: 1 },
  { name: 'flag', maxCount: 1 },
  { name: 'utilities', maxCount: 1 },

]), async (req, res) => {
  const data = req.body;
  const files = req.files;
  const urlImage = `${req.protocol}://${req.get("host")}/uploads/${files.image[0].filename}`;
  const flagImage = `${req.protocol}://${req.get("host")}/uploads/${files.flag[0].filename}`;
  const utilitiesImages = `${req.protocol}://${req.get("host")}/uploads/${files.utilities[0].filename}`;
  const newProduct = new Products({
    image: urlImage,
    flag: flagImage,
    utilities: utilitiesImages,
    discount: data.discount,
    title: data.title,
    voucher: data.voucher,
    price: data.price,
    available: data.available,
  });
  const result = await newProduct.save();
  if (result) {
    res.redirect('/admin');
  } else {
    res.json({
      status: 400,
      messenger: "Lỗi, Thêm thất bại!",
      data: [],
    });
  }
});
router.get("/get-list-products", async function (req, res) {
  const data = await Products.find();
  res.json({
    status: 200,
    messenger: "lấy danh sách thành công",
    data: data,
  });
});

// render view cart
router.use('/', cart);

// render view adim
router.use('/', admin);

// render view home
router.get("/", async function (req, res) {
  if (req.query.logout === 'true') {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).send('Đăng xuất thất bại');
      }
      return res.redirect('/');
    });
  } else {
    const products = await Products.find().lean();
    const user = req.session.user;
    const username = user ? user.name : null;
    const notificationMessage = username ? "Chức năng chưa hoàn thiện" : "";
    const chatBox = username ? "Chức năng chưa hoàn thiện" : "";
    res.render("home", {
      layout: "main",
      products: products,
      userKey: username,
      notificationMessage: notificationMessage,
      handle: ``,
      chatBox: chatBox
    });
  }
});

module.exports = router;
