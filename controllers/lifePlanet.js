const request = require("../helpers/request");
const { error } = require("../helpers/constants");
//1 const fetch = require("node-fetch");
require("dotenv").config();
const env = process.env;

const lifePlanet = async (req, res) => {
  let dictionary = {};
  try {
    //1 const pla = await fetch("env.URL_PLANETS").then((res) => res.json());
    //1 const planets = pla.results
    /* 2 */ const planets = await request(env.URL_PLANETS);
    planets.map((e) => {
      if (!dictionary[e.climate]) {
        dictionary[e.climate] = {
          climate: e.climate,
          population: [parseInt(e.population)],
        };
      }
      dictionary[e.climate].population = parseInt(e.population)
        ? [...dictionary[e.climate].population, parseInt(e.population)]
        : e.population;
      dictionary[e.climate].average = Array.isArray(
        dictionary[e.climate].population
      )
        ? dictionary[e.climate].population.reduce((v, p) => v + p) /
          dictionary[e.climate].population.length
        : e.population;
    });
    res.status(200).json(dictionary);
  } catch {
    res.status(error.server.code).json(error.server.error);
  }
};

module.exports = lifePlanet;
