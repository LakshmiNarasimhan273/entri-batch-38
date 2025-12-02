const express = require("express");
const router = express.Router();

const { createProduct, getallProducts, getproductbyId, updateProduct, deleteProduct } = require("../controller/product.controller");

// http://localhost:8081/products/create
router.post("/create", createProduct);

// http://localhost:8081/products/
router.get("/", getallProducts);

// http://localhost:8081/products/<mongodb-generated-_id>
router.get("/:id", getproductbyId);

// http://localhost:8081/products/update/<mongodb-generated-_id>
router.put("/update/:id", updateProduct);

// http://localhost:8081/products/delete/<mongodb-generated-_id>
router.delete("/delete/:id", deleteProduct);
module.exports = router;