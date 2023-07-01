const axios = require("axios");
const { Pokemon, Type } = require("../db");
const { dataFind } = require("../helpers/variables");

const dataPokemons = async (offset, limit, URL) => {
  const { data } = await axios(`${URL}?offset=${offset}&limit=${limit}`);
  const routes = data.results.map((route) => {
    return route.url;
  });
  const dataApi = {
    next: data.next
      ? data.next.replace(
          "https://pokeapi.co/api/v2/pokemon",
          "http://localhost:3001/pokemons"
        )
      : null,
    previous: data.previous
      ? data.previous.replace(
          "https://pokeapi.co/api/v2/pokemon",
          "http://localhost:3001/pokemons"
        )
      : null,
  };
  const pokemons = await Promise.all(
    routes.map(async (route) => {
      return await axios(route).then(({ data }) => dataFind(data));
    })
  );
  const pokemonsDB = await Pokemon.findAll({
    include: {
      model: Type,
      through: {
        attributes: [],
      },
    },
  });
  dataApi.pokemonsAll = pokemonsDB.concat(pokemons);
  return dataApi;
};
module.exports = dataPokemons;
