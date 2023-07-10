const dataPokemons = require("../controllers/dataPokemons");
const pokemonsById = require("../controllers/pokemonsById");
const pokemonName = require("../controllers/pokemonName");
const URL = "https://pokeapi.co/api/v2/pokemon";

const getPokemonAll = async (req, res) => {
  // El front debe comenzar pidiendo 100 datos para guardarlos en un estado global.
  try {
    const { name, limit, offset } = req.query;
    if (name) {
      const findName = await pokemonName(name.toLowerCase(), URL);
      return res.status(200).json(findName);
    }
    const pokemonsAll = await dataPokemons(URL, limit, offset);
    res.status(200).json(pokemonsAll);
  } catch (error) {
    res.status(404).json(error.message);
  }
};
const getPokemonsById = async (req, res) => {
  try {
    const { idPokemon } = req.params;
   
    const findId = await pokemonsById(idPokemon, URL);
    res.status(200).json(findId);
  } catch (error) {
    res.status(403).json(error.message);
  }
};
module.exports = {
  getPokemonAll,
  getPokemonsById,
};
