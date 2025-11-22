const customerModel = require("../models/customer.model");
const userModel = require("../models/user.model");

const createCustomer = (req, res) => {
    const {userId, customername, customerlocation, number} = req.body;

    const user = userModel.find(exisitingData => exisitingData.id === userId);
    if(!user){
        return res.status(404).json({message: "User not found"});
    }

    if(!customername || !customerlocation || !number){
        return res.status(400).json({message: "All fields are required"});
    }

    const newCustomer = {
        id: customerModel.length ? customerModel[customerModel.length - 1].id + 1 : 1,
        userId,
        customername,
        customerlocation,
        number
    };
    customerModel.push(newCustomer);
    res.status(201).json(newCustomer);
}

const allCustomers = (req, res) => {
    res.status(200).json(customerModel);
}

module.exports = {createCustomer, allCustomers};