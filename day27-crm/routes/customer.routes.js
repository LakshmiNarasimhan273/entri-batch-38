const express = require("express");
const { allCustomers, createCustomer } = require("../controllers/customer.controller");
const router = express.Router();

router.get("/", allCustomers);
router.post("/create-customer", createCustomer);

module.exports = router;