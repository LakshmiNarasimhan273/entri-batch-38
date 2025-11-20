const userModel = require("../models/userModel");

// Register API
const registerAPI = (req, res) => {
    const { name, email, password } = req.body;

    if(!name || !email || !password){
        return res.status(400).json({ message: "All fields are required" });
    }

    // Major condition to check the user mail is already exists or not
    const existingUser = userModel.find(existingData => existingData.email === email);

    if(existingUser){
        return res.status(400).json({message: "User account already exists"});
    }

    const newUser = {
        id: userModel.length ? userModel[userModel.length - 1].id + 1 : 1,
        name,
        email,
        password
    };
    userModel.push(newUser);
    res.status(201).json(newUser);
}

// Login API
const loginAPI = (req, res) => {
    const {email, password} = req.body;

    const user = userModel.find(
        existingData => existingData.email === email && existingData.password === password
    );

    if(!user){
        return res.status(401).json({message: "Invalid credentials"});
    }
    res.status(200).json({message: "Login Successful", user});
}

module.exports = {registerAPI, loginAPI};