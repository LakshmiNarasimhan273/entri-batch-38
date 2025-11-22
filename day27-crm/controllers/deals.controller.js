const dealsModel = require("../models/deals.model");
const userModel = require("../models/user.model");
const customerModel = require("../models/customer.model");

const createDeal = (req, res) => {
    const { userId, customerId, dealname, dealstatus } = req.body;

    const user = userModel.find(existingData => existingData.id === userId);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const customer = customerModel.find(existingData => existingData.id === customerId);
    if (!customer) {
        return res.status(404).json({ message: "Customer not found" });
    }

    if (!dealname || !dealstatus) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const newDeal = {
        id: dealsModel.length ? dealsModel[dealsModel.length - 1].id + 1 : 1,
        userId,
        customerId,
        dealname,
        dealstatus
    };
    dealsModel.push(newDeal);
    res.status(201).json(newDeal);
};

const allDeals = (req, res) => {
    res.status(200).json(dealsModel);
}

module.exports = { createDeal, allDeals };