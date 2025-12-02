const express = require("express");
const app = express();
require("dotenv").config();
const dbConnection = require("./config/dbconnection.config");
const productRoutes = require("./routes/product.routes");

// built-in middlewares
app.use(express.json());

app.use("/products", productRoutes);

dbConnection();
app.listen(process.env.port, () => {
    console.log("Server running on port", process.env.port);
})

// Config -> index.js
// model -> controller -> routes -> index.js