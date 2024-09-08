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

      if (!user || !userId || !username) {
        return res.redirect('/login');
      }

      const cart = await Cart.findOne({ idUsers: userId })
        .populate('products.idProducts')
        .lean();

      if (!cart || cart.products.length === 0) {
        return res.render("me/cart", {
          layout: "cart",
          cart: { products: [] },
          userKey: username,
        })
      }

      res.render("me/cart", {
        layout: "cart",
        carts: cart.products,
        userKey: username,
      })



    } catch (e) {
      next(e);
    }

  };
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
  };

  // get /api/cart-modal
  async getCartModal(req, res, next) {
    try {
      const userId = req.session.user._id;
      const cart = await Cart.findOne({ idUsers: userId }).populate('products.idProducts').lean();

      if (!cart) {
        return res.json({ products: [] });
      }
      res.json(cart);
    } catch (e) {
      next(e);
    }
  };

  // get count products
  async countProducts(req, res, next) {
    try {
      const userId = req.session.user._id;
      const cart = await Cart.findOne({ idUsers: userId }).lean();
      if (!cart) {
        return res.json({ count: 0 });
      }

      const productCount = cart.products.length;

      res.json({ count: productCount });

    } catch (error) {
      console.error('Lỗi khi đếm số lượng sản phẩm: ', error);
      res.status(500).json({ error: 'Có lỗi xảy ra khi đếm số lượng sản phẩm' });
    }
  };

}

module.exports = new cartController();
