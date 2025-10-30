const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  createProduct,
  getProductById,
  updateProductById,
  deleteProductById,
} = require("../controllers/product.controller");

// Get all products
router.get("/", getAllProducts);

// Create a new product
router.post("/", createProduct);

// Get a product by ID
router.get("/:id", getProductById);

// Update a product by ID
router.put("/:id", updateProductById);

// Delete a product by ID
router.delete("/:id", deleteProductById);

// Export the router
module.exports = router;
