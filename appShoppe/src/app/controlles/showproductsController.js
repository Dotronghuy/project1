const Shoppe = require("../models/products");

class productShoppe {
  // GET /products/:title
  show(req, res, next) {
    Shoppe.findOne({ title: req.params.title })
      .lean()
      .then((product) => {
        res.render("products/showproducts", {
          layout: "showproducts",
          product,
        });
      })
      .catch(next);
  }
}

module.exports = new productShoppe();
