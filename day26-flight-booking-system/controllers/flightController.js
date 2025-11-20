const flightModel = require("../models/flightModel");

// GET ALL Flights
const allFlights = (req, res) => {
    res.status(200).json(flightModel);
};

// Create new Flight
const createFlight = (req, res) => {
    const{ flightNumber, departure, destination, departureTime, arrivalTime, price } = req.body;

    if(!flightNumber || !departure || !destination || !departureTime || !arrivalTime || !price){
        return res.status(400).json({ message: "All fields are required" });
    };

    const newFlight = {
        id: flightModel.length ? flightModel[flightModel.length - 1].id + 1 : 1,
        flightNumber,
        departure,
        destination,
        departureTime,
        arrivalTime,
        price
    };
    flightModel.push(newFlight);
    res.status(201).json(newFlight);
}

// Update Flight
const updateFlight = (req, res) => {
    const id = parseInt(req.params.id);
    const {flightNumber, departure, destination, departureTime, arrivalTime, price} = req.body;

    const flight = flightModel.find(existingData => existingData.id === id);

    if(flight){
        flight.flightNumber = flightNumber ?? flight.flightNumber;
        flight.departure = departure ?? flight.departure;
        flight.destination = destination ?? flight.destination;
        flight.departureTime = departureTime ?? flight.departureTime;
        flight.arrivalTime = arrivalTime ?? flight.arrivalTime;
        flight.price = price ?? flight.price;
        res.status(200).json({message: "Flight data updated", flight});
    }else{
        res.status(404).json({message: "Flight not found"});
    }
};

// Delete Flight
const deleteFlight = (req, res) => {
    const id = parseInt(req.params.id);
    const flightIndex = flightModel.findIndex(existingData => existingData.id === id);

    if(flightIndex !== -1){
        const deletedFlight = flightModel.splice(flightIndex, 1);
        res.status(200).json({message: "Flight data deleted"});
    }else{
        res.status(404).json({message: "Flight not found"});
    }
}

module.exports = {allFlights, createFlight, updateFlight, deleteFlight};