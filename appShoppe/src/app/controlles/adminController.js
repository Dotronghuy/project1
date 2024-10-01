const mongoose = require('mongoose');
const User = require('../models/user');
const Products = require('../models/products');
const Cart = require('../models/cart');

class adminController {
    async show(req, res, next) {
        try {
            const users = await User.find().lean();
            const user = req.session.user;
            const username = user ? user.name : null;
            res.render("admin", {
                layout: "admin",
                userKey: username,
            });
        } catch (e) {
            console.error(e);
            res.status(500).send("Có lỗi xảy ra trong quá trình lấy dữ liệu người dùng.");
        }
    }
    async getUsers(req, res, next) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (e) {
            console.error(e);
        }
    }
    async getProducts(req, res, next) {
        try {
            const products = await Products.find();
            res.json(products);
        } catch (e) {
            console.error(e);
        }
    }

    async deleteItem(req, res, next) {
        const { id, type } = req.params;

        try {
            if (type === 'user') {
                await Cart.deleteMany({ idUsers: id });
                await User.findByIdAndDelete(id);
                res.status(200).json({ success: true })
            } else if (type === 'product') {
                await Cart.updateMany(
                    {},
                    { $pull: { products: { idProducts: id } } }
                );
                await Products.findByIdAndDelete(id);
                return res.status(200).json({ success: true });
            } else {
                res.status(400).json({ message: 'Type is not valid.' });
            }
        } catch (e) {
            console.error(e);
        }

    }

    async toggleAdmin(req, res, next) {

        try {
            const userId = req.params.id;
            const user = await User.findById(userId);
            const newAdmin = !user.isAdmin;

            await User.findByIdAndUpdate(userId, { isAdmin: newAdmin });
            res.status(200).json({ success: true, isAdmin: newAdmin });
        } catch (e) {
            res.status(500)
            console.error(e);
        }

    }

    async getEditProduct(req, res, next) {
        try {
            const user = req.session.user;
            const username = user ? user.name : null;
            const productId = req.params.id;
            const product = await Products.findById(productId).lean();
            if (!product) {
                res.status(404).send({ message: 'Product not found' });

            }
            res.render('products/edit_product', {
                layout: 'edit_product',
                userKey: username,
                product: product,
            })
        } catch (e) {
            console.error(e);
            res.status(500).send({ message: 'Internal server error' });
        }

    }

    async updateProduct(req, res, next) {
        try {
            const productId = req.params.id;
            const updateData = req.body;

            const updateProduct = await Products.findByIdAndUpdate(productId, updateData, { new: true, runValidators: true });

            if (!updateProduct) {
                res.status(404).send({ message: 'Product not found' });
            };

            res.status(200).json({ success: true });
        } catch (e) {
            console.error(e);
            res.status(500).send({ message: 'Cập nhật sản phẩm thất bại.' });
        }
    }







}

module.exports = new adminController();
