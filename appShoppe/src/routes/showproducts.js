const express = require("express");
const router = express.Router();

const showproductsController = require("../app/controlles/showproductsController");

router.get("/:title", showproductsController.show);

module.exports = router;
