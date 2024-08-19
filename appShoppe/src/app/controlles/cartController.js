const mongoose = require('mongoose');
const Cart = require("../models/cart");
const jwtVerify = require('../serviecs/JwtVerify');
const Product = require("../models/products");
const CartService = require('../serviecs/cartServiecs');

class cartController {
  // GET /cart
  async show(req, res, next) {
    try {
      const userId = req.session.user._id;
      const cart = await Cart.findOne({ userId: userId }).lean();

      if (!cart) {
        return res.render("me/cart", {
          layout: "cart",
          cart: { products: [] },
          userKey: req.session.user,
          notificationMessage: "Giỏ hàng trống",
          handle: ``
        })
      }

      res.render("me/cart", {
        layout: "cart",
        cart: { products: [] },
        userKey: req.session.user,
        notificationMessage: "",
        handle: ``
      })


    } catch (e) {
      next(e);
    }

  }
  // post /add-cart
  async add_cart(req, res, next) {
    try {
      if (jwtVerify.jwtVerifyAccessToken(req.cookies.access_token)) {
        const decoded = jwtVerify.jwtVerifyAccessToken(
          req.cookies.access_token
        );
        const userId = decoded.payload.id;
        console.log(userId);
        const response = CartService.addtoCart(userId, req.params.id);
        return res.redirect("back");
      }
    } catch (e) {
      return res.redirect("back");
    }
  }

}

module.exports = new cartController();
