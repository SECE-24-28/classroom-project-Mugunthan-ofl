const User = require("../models/user");
exports.createUser = async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;
    const createUser = await User.create({
      firstName,
      lastName,
      email,
    });
    return res.status(200).json({
      success: true,
      message: "User is created successfully",
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

exports.createManyUsers = async (req, res) => {
  try {
    const { details } = req.body;
    const createUser = await User.insertMany(details);
    return res.status(200).json({
      success: true,
      message: "User is created successfully",
    });
  } catch (e) {
    res.status(404).json({
      success: false,
      error: e,
    });
  }
};