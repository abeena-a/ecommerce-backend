const Product = require("../models/product");

exports.recommendProducts = async (req, res) => {
  try {
    const recommended = await Product.find().limit(5);

    res.json({
      recommendations: recommended
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};