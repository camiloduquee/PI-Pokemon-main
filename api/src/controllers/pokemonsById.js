const axios = require("axios");
const { dataFind } = require("../helpers/variables");
const { Pokemon, Type } = require("../db");

const pokemonsById = async (idPokemon, URL) => {
  const responseApi = await axios(`${URL}/${idPokemon}`)
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
      ID: idPokemon ,
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
  throw new Error("No se encontro ningun pokemon con ese id.");
};
module.exports = pokemonsById;
