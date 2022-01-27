const request = require("../helpers/request");
require("dotenv").config();
const { error } = require("../helpers/constants");
//1 const fetch = require('node-fetch')
const env = process.env;

const topCars = async (req, res) => {
  let top10 = [];
  let arrVehicles = [];
  try {
    /* 2 */ const vehicles = await request(env.URL_VEHICLES);
    //1 const veh = await fetch(env.URL_VEHICLES).then((res)=> res.json());
    //1 const vehicles = veh.results
    /* 2 */ const starships = await request(env.URL_STARSHIPS);
    //1 const sta = await fetch(env.URL_STARSHIPS).then((res)=> res.json());
    //1 const starships = sta.results
    arrVehicles = vehicles.concat(starships);
    arrVehicles.map((e) => {
      e.cost_in_credits = parseInt(e.cost_in_credits) ? e.cost_in_credits : "0";
    });
    top10 = arrVehicles
      .sort((a, b) => b.cost_in_credits - a.cost_in_credits)
      .slice(0, 10);
    res.status(200).json(top10);
  } catch {
    res.status(error.server.code).json(error.server.error);
  }
};
module.exports = topCars;
