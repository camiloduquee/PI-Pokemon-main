const axios = require("axios");
const { Pokemon, Type } = require("../db");
const { dataFind } = require("../helpers/variables");

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
    data.results = pokemonsDB.concat(data.results);
    return data;
  }

  async function recursiveFetch(url, accumulatedData = []) {
    const data = await fetchData(url);
    accumulatedData = accumulatedData.concat(data.results);
    const dataApi = {};
    dataApi.results = accumulatedData;


    if (data.next) {
      return recursiveFetch(data.next, accumulatedData);
    }

    return dataApi;
  }

  async function main() {
    if (limit || offset) {
      return fetchData(`${URL}?offset=${offset}&limit=${limit}`);
    }

    const apiData = await recursiveFetch(`${URL}?offset=${0}&limit=${120}`);
    return apiData;
  }

  return main();
};
module.exports = dataPokemons;
