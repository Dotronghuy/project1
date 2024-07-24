const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartDesc = new Schema(
  {
    image: { type: String },
    utilities: { type: String },
    title: { type: String },
    price: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("cart", cartDesc);
