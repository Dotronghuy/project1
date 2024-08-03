const Shoppe = require("../models/products");

class productShoppe {
  // GET /products/:title
  show(req, res, next) {
    Shoppe.findOne({ title: req.params.title })
      .lean()
      .then((product) => {
        const userKey = req.session.user;
        const notificationMessage = userKey ? "Chức năng chưa hoàn thiện" : "";
        res.render("products/showproducts", {
          layout: "showproducts",
          product,
          userKey,
          notificationMessage: notificationMessage,
          handle: ``
        });
      })
      .catch(next);
  }
}

module.exports = new productShoppe();
