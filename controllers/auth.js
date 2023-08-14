const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors");
const bcryptjs = require("bcryptjs");

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError("Please provide name, email and password");
  }
  // const salt = await bcryptjs.genSalt(10);
  // const hashedPassword = await bcryptjs.hash(password, salt);
  // const tempUser = { name, email, password };
  const user = await User.create({
    ...req.body,
  });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
  // res.send("register");
  // res.send(req.body);
  // console.log(req.body);
};

const login = async (req, res) => {
  res.send("login");
};

module.exports = {
  register,
  login,
};
