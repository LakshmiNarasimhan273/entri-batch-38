const express = require("express");
const app = express();
const authroutes = require("./routes/auth.routes");
const customerRoutes = require("./routes/customer.routes");
const dealRoutes = require("./routes/deals.routes");

app.use(express.json());
app.use("/auth", authroutes);
app.use("/customer", customerRoutes);
app.use("/deals", dealRoutes);

app.listen(8081, () => {
    console.log("Server up and running on 8081");    
});