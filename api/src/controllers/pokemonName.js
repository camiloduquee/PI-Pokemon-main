const axios = require("axios");
const { dataFind } = require("../helpers/variables");
const { Pokemon, Type } = require("../db");

const pokemonName = async (name, URL) => {
  const responseApi = await axios(`${URL}/${name}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.status;
    });

  if (Object.keys(responseApi).length !== 0) {
    return dataFind(responseApi);
  }
  const pokemonsDB = await Pokemon.findAll({
    where: {
      Nombre: name,
    },
    include: {
      model: Type,
      through: {
        attributes: [],
      },
    },
  });

  if (pokemonsDB.length) {
    return pokemonsDB[0];
  }
  throw new Error("No se encontro ningun pokemon con ese nombre.");
};
module.exports = pokemonName;
