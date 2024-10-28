const Product = require('./models/productModel');

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new product (admin only)
const createProduct = async (req, res) => {
  const { name, description, price, stock } = req.body;

  try {
    const product = new Product({ name, description, price, stock });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getProducts, createProduct };
