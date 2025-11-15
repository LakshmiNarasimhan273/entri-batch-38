const express = require("express");
const app = express();
const sampleRoute = require("./routes/apiRoutes");

app.use(sampleRoute);

app.listen(8081, () => {
    console.log("Server running");
});