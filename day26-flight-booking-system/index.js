const express = require("express");
const app = express();

const authRoutes = require("./routes/authRoutes");
const flightRoutes = require("./routes/flightRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/flight", flightRoutes);
app.use("/booking", bookingRoutes);

app.listen(8081, () => {
    console.log("Server up and running on 8081")
});