const express = require("express");
const { getallTasks, getTask, createTask, updateTask, deleteTask } = require("../controller/taskController");
const router = express.Router();

router.get("/", getallTasks);
router.get("/:id", getTask);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;