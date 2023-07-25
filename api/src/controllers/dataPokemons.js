const axios = require("axios");
const { Pokemon, Type } = require("../db");
const { dataFind, endPointApi } = require("../helpers/variables");

const dataPokemons = async (URL, limit, offset) => {
  const pokemonsDB = await Pokemon.findAll({
    include: {
      model: Type,
      through: {
        attributes: [],
      },
    },
  });

  async function fetchData(url) {
    const { data } = await axios(url);
    const routes = data.results.map((route) => {
      return route.url;
    });
    const promise = routes.map(async (pokemon) => {
      const { data } = await axios(pokemon);
      return dataFind(data);
    });
    data.results = await Promise.all(promise);

    const dataApi = {
      next: data.next
        ? data.next.replace(
            "https://pokeapi.co/api/v2/pokemon",
            `${endPointApi}/pokemons`
          )
        : null,
      previous: data.previous
        ? data.previous.replace(
            "https://pokeapi.co/api/v2/pokemon",
            `${endPointApi}/pokemons`
          )
        : null,
      results: pokemonsDB.concat(data.results),
    };
    
    return dataApi;
  }

  async function main() {
    if (limit || offset) {
      const results = await fetchData(`${URL}?offset=${offset}&limit=${limit}`);
      return results;
    }
    const results = await recursiveFetch(`${URL}?offset=${0}&limit=${120}`);

    return results;
  }

  return main();
};
module.exports = dataPokemons;
