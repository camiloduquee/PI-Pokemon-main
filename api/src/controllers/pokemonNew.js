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
    throw new Error("Error, ya existe un pokemon con este nombre");

  if (!post.Tipo.every(currentValue)) {
    throw new Error("Error, Datos incorrectos en el Tipo de Pokemon");
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
      "Error, este pokemon ya se encuentra registrado en la base de datos"
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
