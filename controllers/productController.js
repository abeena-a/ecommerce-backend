const Product = require("../models/product");

exports.createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json(product);
};

exports.getProducts = async (req, res) => {
  const {
    search,
    category,
    minPrice,
    maxPrice,
    sort
  } = req.query;

  let query = {};

  if (search)
    query.name = {
      $regex: search,
      $options: "i"
    };

  if (category)
    query.category = category;

  if (minPrice || maxPrice) {
    query.price = {};
  }

  if (minPrice)
    query.price.$gte = Number(minPrice);

  if (maxPrice)
    query.price.$lte = Number(maxPrice);

  let products = Product.find(query);

  if (sort) {
    products = products.sort({
      price: sort === "asc" ? 1 : -1
    });
  }

  res.json(await products);
};

exports.getProduct = async (req, res) => {
  const product = await Product.findById(
    req.params.id
  );

  res.json(product);
};

exports.updateProduct = async (req, res) => {
  const product =
    await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

  res.json(product);
};

exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(
    req.params.id
  );

  res.json({
    message: "Product deleted"
  });
};