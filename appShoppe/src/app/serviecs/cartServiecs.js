const User = require('../models/user');
const Cart = require('../models/cart');
const Product = require('../models/products');
const mongoose = require('mongoose');

const addtoCart = async (userId, productId, quanlity) => {
    try {



        const checkUser = await User.findById(userId);
        if (!checkUser) {
            return {
                status: "FAILED",
                message: "The user isn't defined",
            };
        }

        // Chuyển đổi productId thành ObjectId
        const productObjectId = new mongoose.Types.ObjectId(productId);

        let cart = await Cart.findOne({ idUsers: userId });
        if (!cart) {
            cart = new Cart({ idUsers: userId });
        }

        const productDetail = await Product.findById(productObjectId);
        if (!productDetail) {
            return {
                status: "FAILED",
                message: "Product not found",
            };
        }

        let productExists = false;
        for (let item of cart.products) {
            if (item.idProducts.equals(productObjectId)) {
                item.quanlity += quanlity;
                productExists = true;
                break;
            }
        }

        if (productExists) {
            await cart.save();
        } else {
            const productObject = {
                idProducts: productObjectId,
                image: productDetail.image,
                title: productDetail.title,
                price: productDetail.price,
                quanlity: quanlity
            };
            cart.products.push(productObject);
            await cart.save();
        }

        return {
            status: 200,
            message: "success",
        };
    } catch (e) {
        console.error(e); // Log lỗi để dễ debug
        return {
            status: 400,
            message: "Error",
        };
    }
};

module.exports = {
    addtoCart
};
