const express = require("express");
const router = express.Router();

const buyerController = require("../app/controlles/buyerController");

router.get("/register", buyerController.register);
router.get("/login", buyerController.login);

module.exports = router;
