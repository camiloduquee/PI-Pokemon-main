const axios = require("axios");
const { dataFind } = require("../helpers/variables");
const { Pokemon } = require("../db");

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
      ID: idPokemon,
      isIn: {
        msg:"no se encontro ningun id relacionado con el pokemon (UUIDV)"
        
      },
    },
  });

  if (pokemonsDB.length) {
    return pokemonsDB;
  }
  throw new Error("No se encontro ningun pokemon con ese id.");
};
module.exports = pokemonsById;
