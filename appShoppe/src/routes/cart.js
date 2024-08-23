const express = require('express');
const router = express.Router();

const cartController = require('../app/controlles/cartController');
const ensureAuthenticated = require('../middleware/ensureAuthenticated ');

router.get('/cart', cartController.show);
router.post('/add-cart/:id', ensureAuthenticated, cartController.add_cart);




module.exports = router