const express = require("express");
const { regU } = require("../controllers/userControllers");
const router = express.Router();
router.route("/").post(regU);
module.exports = router;
