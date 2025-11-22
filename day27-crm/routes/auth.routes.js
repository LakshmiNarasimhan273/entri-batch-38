const express = require("express");
const { registerAPI, loginAPI } = require("../controllers/auth.controller");
const router = express.Router();

router.post("/register", registerAPI);
router.post("/login", loginAPI);

module.exports = router;