const URL = "https://pokeapi.co/api/v2";
const axios = require("axios");
const {sequelize, Type} = require('../db.js');

//link produccion
// const endPointClient = "https://pi-pokemon-main-orcin.vercel.app";
 const endPointApi = "https://back-pokemon-uft4.onrender.com";


//link en local
const endPointClient = "http://localhost:5173";
// const endPointApi = "http://localhost:3001";

const dataFind = (data) => {
  const obj = {
    ID: data.id,
    Nombre: data.name,
    Vida: data.stats[0].base_stat,
    Ataque: data.stats[1].base_stat,
    Defensa: data.stats[2].base_stat,
    Velocidad: data.stats[5].base_stat,
    Altura: data.height,
    Peso: data.weight,
    Types: data.types.map((element) => {
      return { Nombre: element.type.name };
    }),
  };
  data.sprites.other["dream_world"].front_default
    ? (obj.Imagen = data.sprites.other["dream_world"].front_default)
    : (obj.Imagen = data.sprites.other["official-artwork"].front_default);

  return obj;
};
async function checkTableExists(tableName) {
  try {
    await sequelize.queryInterface.describeTable(tableName);
    return true;
  } catch (error) {
    return false;
  }
}
const initTableTypes = async () => {
  const tableExists = await checkTableExists("Types");
  if (!tableExists) {
    const { data } = await axios(`${URL}/type`);
    const result = data.results.map((type) => ({ ["Nombre"]: type.name }));
    return await Type.bulkCreate(result);
   
  }
};
module.exports = { dataFind, initTableTypes, endPointClient, endPointApi };
