const express = require('express');
const router = express.Router();
const userController = require('../app/controlles/userController');
const collection = require('../app/models/user')
const bcrypt = require('bcrypt');

router.post('/', userController.createUser);
router.post('/login', userController.login);


module.exports = router;