const express = require("express");
const startWRouter = express.Router();
const lifePlanet = require('../controllers/lifePlanet')
const topCars = require('../controllers/topCars')
const vehiculeUseBy = require('../controllers/vehiculeUseBy')
const isAuth = require('../middleware/itsAuth')

startWRouter.get("/lifePlanet", isAuth, lifePlanet)
startWRouter.get("/topCars", isAuth, topCars)
startWRouter.get("/vehiculeUseBy/:lastName", isAuth, vehiculeUseBy)

module.exports = startWRouter;
