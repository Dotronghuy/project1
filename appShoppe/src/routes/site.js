const express = require("express");
const router = express.Router();

const descShoppe = require("../app/controlles/descShoppe");

router.get("/", descShoppe.index);

module.exports = router;
