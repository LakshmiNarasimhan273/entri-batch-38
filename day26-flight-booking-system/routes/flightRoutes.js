const express = require("express");
const router = express.Router();

const {allFlights, createFlight, updateFlight, deleteFlight} = require("../controllers/flightController");

router.get("/", allFlights);
router.post("/create-flight", createFlight);
router.put("/:id", updateFlight);
router.delete("/:id", deleteFlight);

module.exports = router;