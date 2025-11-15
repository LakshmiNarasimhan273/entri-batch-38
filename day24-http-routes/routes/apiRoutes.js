const express = require("express");
const { getMessage, sendMessage, editMessage, deleteMessage } = require("../controllers/sampleApi");
const router = express.Router();
// Router transform the normal controller js function into a 
// API function

// http://localhost:8081/message
router.get("/message", getMessage);
router.post("/create-user", sendMessage);
router.put("/edit-user", editMessage);
router.delete("/delete", deleteMessage);

module.exports = router;