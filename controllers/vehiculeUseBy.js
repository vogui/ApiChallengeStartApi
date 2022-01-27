const request = require("../helpers/request");
const { error } = require("../helpers/constants");
//1 const fetch = require("node-fetch");
require('dotenv').config()
const env = process.env = process.env


const vehiculeUseBy = async (req, res) => {
  let lastName = req.params.lastName;
  let arrVehicles = [];
  let arrCharacters = [];
  let actorVehicle = [];
  try {
    /* 2 */const peoples = await request(env.URL_PEOPLE);
    //1 const peo = await fetch(env.URL_PEOPLE).then((res)=> res.json());
    //1 const peoples = peo.results
   /* 2 */ const vehicles = await request(env.URL_VEHICLES);
    //1 const veh = await fetch(env.URL_VEHICLES).then((res)=> res.json());
    //1 const vehicles = veh.results
   /* 2 */ const starships = await request(env.URL_STARSHIPS);
    //1 const sta = await fetch(env.URL_STARSHIPS).then((res)=> res.json());
    //1 const starships = sta.results
    arrVehicles = vehicles.concat(starships);
    peoples.map((people) => {
      if (people.name.endsWith(lastName)) {
        arrVehicles.map((vehicle) => {
          if (
            people.vehicles.includes(vehicle.url) ||
            people.starships.includes(vehicle.url)
          ) {
            actorVehicle = [
              ...actorVehicle,
              {
                name: vehicle.name,
                model: vehicle.model,
                cost_in_credits: vehicle.cost_in_credits,
              },
            ];
          }
        });
        arrCharacters = [
          ...arrCharacters,
          {
            name: people.name,
            vehicles: actorVehicle,
          },
        ];
      }
    });

    res.status(200).json(arrCharacters);
  } catch {
    res.status(error.server.code).json(error.server.error);
  }
};

module.exports = vehiculeUseBy;
