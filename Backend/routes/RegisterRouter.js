const express = require("express");
const { registerUser } = require("../controllers/RegisterController");

const router = express.Router();
router.route("/").post(registerUser);

module.exports = router;