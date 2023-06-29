const axios = require("axios");

const pokemonsAll = require("../controllers/pokemonsAll");
const URL = "https://pokeapi.co/api/v2/pokemon";

 // El front debe comenzar pidiendo 100 datos para guardarlos en un estado global.

const getPokemonAll = async (req, res) => {
  
  try {
    // El front debe comenzar pidiendo 100 datos para guardarlos en un estado global.
    const { offset, limit } = req.query;
    const { data } = await axios(`${URL}?offset=${offset}&limit=${limit}`);
    const dataPokemon = pokemonsAll(data);
    res.status(200).json(dataApi);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
const getPokemonName = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
    }
const getPokemonsById = async (req, res) => {
        try {
            
        } catch (error) {
            
        }
    }
   
module.exports = {
    getPokemonAll,
    getPokemonName,
    getPokemonsById
};