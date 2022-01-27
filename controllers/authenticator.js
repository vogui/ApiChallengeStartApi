const jwt = require("jsonwebtoken");
const { superAdmin, error } = require("../helpers/constants");
require("dotenv").config();
const env = process.env;

const authenticator = (req, res) => {
  try{
  const token = jwt.sign({ user: superAdmin }, env.SECRET_KEY, {
    expiresIn: 86400,
  });
  res.status(200).json({ token });
  }
  catch{
    res.status(error.server.code).json(error.server.error);
  }
};

module.exports = authenticator;
