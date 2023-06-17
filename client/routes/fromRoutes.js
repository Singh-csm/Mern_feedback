const fromController = require("../controller/fromController");
const express = require("express");
const router = express.Router();

router.post("/form", fromController.createdata)

module.exports = router;