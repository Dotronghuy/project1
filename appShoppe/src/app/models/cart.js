const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartDesc = new Schema(
  {
    idUsers: { type: Schema.Types.ObjectId, ref: 'user', required: true },
    products: [{
      idProducts: { type: Schema.Types.ObjectId, ref: 'product', required: true },
      image: { type: String },
      title: { type: String },
      price: { type: String },
      quanlity: { type: Number, default: 1 },
    }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("cart", cartDesc);
