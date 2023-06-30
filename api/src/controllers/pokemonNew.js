const { Pokemon } = require("../db");
const axios = require("axios");

const pokemonNew = async (post, URL) => {
  const responseApi = await axios(`${URL}/${post.Nombre.toLowerCase()}`)
    .then((response) => {
      return response.status;
    })
    .catch((error) => {
      return error.response.status;
    });
  console.log(responseApi)
  if (responseApi === 200)
    throw new Error("Error, ya existe un pokemon con este nombre");

  const [pokemon, created] = await Pokemon.findOrCreate({
    where: { Nombre: post.Nombre },
    defaults: {
      Imagen: post.Imagen,
      Vida: post.Vida,
      Ataque: post.Ataque,
      Defensa: post.Defensa,
      Velocidad: post.Velocidad,
      Altura: post.Altura,
      Peso: post.Peso,
    },
  });
  if (!created) {
    throw new Error(
      "Error, este pokemon ya se encuentra registrado en la base de datos"
    );
  }
  return pokemon;
};
module.exports = pokemonNew;
