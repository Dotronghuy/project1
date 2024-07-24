const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productsDesc = new Schema(
  {
    image: { type: String },
    flag: { type: String },
    discount: { type: String },
    utilities: { type: String },
    title: { type: String },
    voucher: { type: String },
    price: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("product", productsDesc);
