const bookingModel = require("../models/bookingModel");
const userModel = require("../models/userModel");
const flightModel = require("../models/flightModel");

// Create Booking
const createBooking = (req, res) => {
    const {userId, flightId, seatNumber} = req.body;

    const user = userModel.find(existingData => existingData.id === userId);
    const flight = flightModel.find(existingData => existingData.id === flightId);

    if(!user) {
        return res.status(404).json({message: "User ID Not Found"});
    }
    if(!flight){
        return res.status(404).json({message: "Flight Not Found"});
    }

    const newBooking = {
        id: bookingModel.length ? bookingModel[bookingModel.length - 1].id + 1 : 1,
        userId,
        flightId,
        seatNumber
    }
    bookingModel.push(newBooking);
    res.status(201).json({message: "Booking Successful"});
}

module.exports = createBooking;