const productModel = require("../model/product.model");

// Post API
const createProduct = async (req, res) => {
    const { title, description, price } = req.body;

    try{
        if(!title || !description || !price){
            return res.status(400).json({message: "All fields are required"});
        }
        const newProduct = new productModel({title, description, price});
        await newProduct.save(); // save function -> insert option in database
        res.status(201).json({message: "Product Created"});
    }catch(err){
        res.status(500).json({message: "Product Creation Failed"});
    }
}

// GET All API
const getallProducts = async (req, res) => {
    try{
        const products = await productModel.find();
        res.status(200).json(products);
    }catch(err){
        res.status(500).json({message: "Products Fetching Failed"});
    }
}

// GET BY ID API
const getproductbyId = async (req, res) => {
    const { id } = req.params;
    try{
        const product = await productModel.findById(id);

        if(!product){
            return res.status(404).json({message: "Product Not Found"});
        }
        res.status(200).json(product);
    }catch(err){
        res.status(500).json({message: "Product Fetching Failed"});
    }
}

// PUT API
const updateProduct = async (req, res) => {
    const { id } = req.params;
    try{
        const updatedProduct = await productModel.findByIdAndUpdate(id, req.body,
            {new: true}
        );
        res.status(200).json({message: "Product information updated"});
    }catch(err){
        res.status(500).json({message: "Product Updation Failed"});
    }
}

// DELETE API
const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try{
        await productModel.findByIdAndDelete(id);
        res.status(200).json({message: "Product Deleted"});
    }catch(err){
        res.status(500).json({message: "Product Deletion Failed"});
    }
}

module.exports = {createProduct, getallProducts, getproductbyId, updateProduct, deleteProduct};