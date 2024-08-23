const mongoose = require('mongoose');
const Cart = require("../models/cart");
const jwtVerify = require('../serviecs/JwtVerify');
const Product = require("../models/products");
const CartService = require('../serviecs/cartServiecs');
const User = require('../models/user');

class cartController {
  // GET /cart
  async show(req, res, next) {
    try {
      const userId = req.session.user._id;
      const user = req.session.user;
      const username = user ? user.name : null;
      const cart = await Cart.findOne({ userId: userId }).lean();

      if (!cart) {
        return res.render("me/cart", {
          layout: "cart",
          cart: { products: [] },
          userKey: username,
          notificationMessage: "Giỏ hàng trống",
          handle: ``
        })
      }

      res.render("me/cart", {
        layout: "cart",
        cart: cart,
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
      const userId = req.session.user._id;
      const productId = req.params.id;
      const quanlity = parseInt(req.body.quanlity, 10);
      const actionBuy = req.body.actionBuy;
      if (isNaN(quanlity) || quanlity <= 0) {
        return res.status(400).json({ message: "NaN" });
      }
      console.log(userId);
      console.log("productId: " + productId);
      console.log(quanlity);
      const result = await CartService.addtoCart(userId, productId, quanlity);
      if (result.status === 200) {
        if (actionBuy === 'buy-now') {
          return res.redirect("/cart");
        }
        return res.redirect("back");
      } else {
        return res.status(400).json({ message: result.message });
      }
    } catch (e) {
      console.error(e); // Log lỗi để dễ debug
      return res.redirect("back");
    }
  }
}

module.exports = new cartController();
