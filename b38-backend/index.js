const express = require("express");
const app = express();
require("dotenv").config();
const dbConnection = require("./config/dbconnection.config");

dbConnection();
app.listen(process.env.port, () => {
    console.log("Server running on port", process.env.port);
})