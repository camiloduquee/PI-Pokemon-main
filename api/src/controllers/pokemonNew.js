const { Pokemon, Type } = require("../db");
const axios = require("axios");

const pokemonNew = async (post, URL) => {
  const countTable = await Type.count();
  const currentValue = (value) => value <= countTable;
  const responseApi = await axios(`${URL}/${post.Nombre.toLowerCase()}`)
    .then((response) => {
      return response.status;
    })
    .catch((error) => {
      return error.response.status;
    });

  if (responseApi === 200)
    throw new Error("Error, a pokemon with this name already exists.");

  if (!post.Tipo.every(currentValue)) {
    throw new Error("Error, Incorrect Pokemon Type Data.");
  }

  const [newPokemon, created] = await Pokemon.findOrCreate({
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
      "Error, this pokemon is already registered in the database."
    );
  }
  await newPokemon.addTypes(post.Tipo);
// Devuelvo una respuesta con el pokemon y le incluyo el tipo de pokemon
  const pokemon = await Pokemon.findAll({
    where: { ID: newPokemon.ID },
    include: {
      model: Type,
      through: {
        attributes: [],
      },
    },
  });
  return pokemon;
};

module.exports = pokemonNew;
