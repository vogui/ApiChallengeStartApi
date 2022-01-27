const express = require("express");
const authRouter = express.Router();
const authenticator = require('../controllers/authenticator')

authRouter.get("/auth", authenticator )

module.exports = authRouter