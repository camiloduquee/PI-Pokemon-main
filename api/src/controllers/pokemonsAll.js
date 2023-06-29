const axios = require("axios");

const pokemonsAll = async (data) => {
   
    const routes = data.results.map((route) => {
      return route.url;
    });
    
    const dataApi = {
      totalPokemons: data.count,
      next: data.next
        ? data.next.replace(
            "https://pokeapi.co/api/v2/pokemon",
            "http://localhost:3001/pokemons"
          )
        : null,
      previous: data.previous
        ? data.previous.replace(
            "https://pokeapi.co/api/v2/pokemon",
            "http://localhost:3001/pokemons"
          )
        : null,
      pokemonsAll: [],
    };
    const pokemons = await Promise.all(
      routes.map(async (route) => {
        return await axios(route).then(
          ({ data }) =>
            (obj = {
              ID: data.id,
              Name: data.name,
              Imagen: data.sprites.other["official-artwork"].front_default,
              Vida: data.stats[0].base_stat,
              Ataque: data.stats[1].base_stat,
              Defensa: data.stats[2].base_stat,
              Velocidad: data.stats[5].base_stat,
              Altura: data.height,
              Peso: data.weight,
            })
        );
      })
    );
    dataApi.pokemonsAll.push(pokemons);
 
};
module.exports = pokemonsAll;
