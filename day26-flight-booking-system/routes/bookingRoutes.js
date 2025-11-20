const express = require("express");
const createBooking = require("../controllers/bookingController");
const router = express.Router();

router.post("/", createBooking);

module.exports = router;