const pokemonNew = require("../controllers/pokemonNew");
const URL = "https://pokeapi.co/api/v2/pokemon";

const postPokemon = async (req, res) => {
  try {
    const {
      Nombre,
      Imagen,
      Vida,
      Ataque,
      Defensa,
      Velocidad,
      Altura,
      Peso,
      Tipo
    } = req.body;

    if ( !Nombre || !Imagen || !Vida || !Ataque || !Defensa || !Tipo) throw new Error('Faltan datos')
    const newPost = await pokemonNew(
        {
        Nombre,
        Imagen,
        Vida,
        Ataque,
        Defensa,
        Velocidad,
        Altura,
        Peso,
        Tipo
        }
        ,URL
      );
      res.status(201).json(newPost);
  } catch (error) {
    res.status(404).json(error.message);
  }
};
module.exports = postPokemon;
