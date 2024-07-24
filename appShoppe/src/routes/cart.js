const express = require('express');
const router = express.Router();

const cartController = require('../app/controlles/cartController');

router.get('/cart', cartController.show);


module.exports = router