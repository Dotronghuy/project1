const express = require('express');
const router = express.Router();

const cartController = require('../app/controlles/cartController');
const ensureAuthenticated = require('../middleware/ensureAuthenticated ');

router.get('/cart', cartController.show);
router.post('/add-cart/:id', ensureAuthenticated, cartController.add_cart);
router.get('/api/cart-modal-data', ensureAuthenticated, cartController.getCartModal);
router.get('/api/cart-item-count', cartController.countProducts);
router.post('/cart/delete', ensureAuthenticated, cartController.delete);




module.exports = router