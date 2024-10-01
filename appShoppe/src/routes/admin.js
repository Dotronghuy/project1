const express = require("express");
const router = express.Router();
const adminController = require('../app/controlles/adminController.js');

router.get('/admin', adminController.show);
router.get('/admin/users', adminController.getUsers);
router.get('/admin/products', adminController.getProducts);
router.delete('/admin/delete/:type/:id', adminController.deleteItem);
router.put('/admin/user/:id/toggleAdmin', adminController.toggleAdmin);
router.get('/admin/edit-product/:id', adminController.getEditProduct);
router.put('/admin/update-product/:id', adminController.updateProduct);


module.exports = router;
