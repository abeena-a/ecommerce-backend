const User = require("../models/user");

exports.getProfile = async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json(user);
};

exports.updateProfile = async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.user.id,
    req.body,
    { new: true }
  );

  res.json(user);
};

exports.deleteProfile = async (req, res) => {
  await User.findByIdAndDelete(req.user.id);

  res.json({
    message: "Profile deleted"
  });
};