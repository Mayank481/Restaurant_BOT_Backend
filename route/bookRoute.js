const express = require("express");
const router = express.Router();
const { getBookTable } = require("../controller/booktable");

router.route("/booktables").get(getBookTable);

module.exports = router;
