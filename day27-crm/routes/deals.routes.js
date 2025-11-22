const express = require("express");
const { allDeals, createDeal } = require("../controllers/deals.controller");
const router = express.Router();

router.get("/", allDeals);
router.post("/create-deal", createDeal);

module.exports = router;