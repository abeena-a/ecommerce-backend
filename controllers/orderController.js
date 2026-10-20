const Order = require("../models/order");

exports.createOrder = async (req, res) => {
  const order = await Order.create({
    ...req.body,
    user: req.user.id
  });

  res.status(201).json(order);
};

exports.getOrders = async (req, res) => {
  const orders =
    await Order.find().populate("user");

  res.json(orders);
};

exports.updateOrder = async (req, res) => {
  const order =
    await Order.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

  res.json(order);
};

exports.deleteOrder = async (req, res) => {
  await Order.findByIdAndDelete(
    req.params.id
  );

  res.json({
    message: "Order deleted"
  });
};