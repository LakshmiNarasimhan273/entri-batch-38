const express = require("express");
const app = express();
require("dotenv").config();
const dbConnection = require("./config/dbconnection.config");

const productRoutes = require("./routes/product.routes");
const authRoutes = require("./routes/auth.routes");

// built-in middlewares
app.use(express.json());

app.use("/products", productRoutes);
app.use("/auth", authRoutes);

dbConnection();
app.listen(process.env.port, () => {
    console.log("Server running on port", process.env.port);
})

// Config -> index.js
// model -> controller -> routes -> index.js