const User = require('../models/user')
const Cart = require('../models/cart');

const addtoCart = async (userId, productId, productDetails) => {
    try {
        let cart = await Cart.findOne({ idUsers: userId });

        if (!cart) {
            cart = new Cart({ idUsers: userId });
        }

        let productExists = false;
        for (let item of cart.products) {
            if (item.idProducts.toString() === productId.toString()) {
                item.quanlity += 1;
                productExists = true;
                break;
            }
        }
        if (productExists) {
            await cart.save();
        } else {
            const productObject = {
                idProducts: mongoose.Types.ObjectId(productId),
                image: productDetails.image,
                title: productDetails.title,
                price: productDetails.price,
                quanlity: 1
            };
            cart.products.push(productObject);
            await cart.save();
        }
        return {
            status: 200,
            message: "success",
        }
    } catch (e) {
        return {
            status: 400,
            message: "Error"
        }
    }
}

module.exports = {
    addtoCart
}