const Cart = require("../models/cart");

class cartController {
  // GET /cart
  show(req, res, next) {
    Cart.findOne({})
      .lean()
      .then((cart) => {
        res.render("me/cart", {
          layout: "cart",
          cart,
        });
      })
      .catch(next);
  }
}

module.exports = new cartController();
