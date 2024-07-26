const express = require('express');
const router = express.Router();
const userController = require('../app/controlles/userController');
const collection = require('../app/models/user')
const logLogin = require('../middleware/authMiddleware')

router.post('/', userController.createUser);
router.post('/login', logLogin, userController.login);


module.exports = router;