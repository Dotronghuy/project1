const Shoppe = require("../models/products");

class productShoppe {
  // GET /products/:title
  show(req, res, next) {
    Shoppe.findOne({ title: req.params.title })
      .lean()
      .then((product) => {
        const user = req.session.user;
        const username = user ? user.name : null;
        const notificationMessage = username ? "Chức năng chưa hoàn thiện" : "";
        res.render("products/showproducts", {
          layout: "showproducts",
          product,
          userKey: username,
          notificationMessage: notificationMessage,
          handle: ``
        });
      })
      .catch(next);
  }
}

module.exports = new productShoppe();
