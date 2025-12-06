const express = require("express");
const { registerAPI, loginAPI } = require("../controller/auth.controller");
const router = express.Router();

// http:localhost:8081/auth/register
router.post("/register", registerAPI);

// http://localhost:8081/auth/login
router.post("/login", loginAPI);

module.exports = router;