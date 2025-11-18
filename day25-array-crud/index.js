const express = require("express");
const app = express();
const taskRoutes = require("./routes/taskRoutes");

app.use(express.json());
app.use("/tasks",taskRoutes);

app.listen(8081, () => {
    console.log("Server running");
})