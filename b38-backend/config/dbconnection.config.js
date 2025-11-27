const mongoose = require("mongoose");

const dbConnection = async () => {
    try{
        await mongoose.connect(process.env.atlasport, {
            ssl: true, // secure socket layer
            tlsAllowInvalidCertificates: false // transport layer system
        });
        console.log("Database Connected");
    }catch(err){
        console.log("Database Connection failed");
    }
};

module.exports = dbConnection;