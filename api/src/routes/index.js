const express = require("express");
const router = express.Router();
// Importar todos los routers;
const {
  getPokemonAll,
  getPokemonsById,
  getPokemonName,
} = require("../handlers/getPokemon");
const getTypes = require("../handlers/getTypes");
const postPokemon = require("../handlers/postPokemon");


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/pokemons", getPokemonAll);
router.get("/pokemons/:idPokemon", getPokemonsById);
router.get("/pokemons/", getPokemonName);
router.get("/types", getTypes);
router.post("/pokemons", postPokemon);

module.exports = router;
