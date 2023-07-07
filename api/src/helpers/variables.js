const URL = "https://pokeapi.co/api/v2";
const axios = require("axios");

const dataFind = (data) => {
  const obj = {
    ID: data.id,
    Name: data.name,
    Imagen: {
      svg: data.sprites.other["dream_world"].front_default,
      animacion:
        data.sprites.versions["generation-v"]["black-white"].animated
          .front_default,
      default: data.sprites.other["official-artwork"].front_default,
    },
    Vida: data.stats[0].base_stat,
    Ataque: data.stats[1].base_stat,
    Defensa: data.stats[2].base_stat,
    Velocidad: data.stats[5].base_stat,
    Altura: data.height,
    Peso: data.weight,
    Tipo: data.types.map((element) => element.type.name),
  };
  return obj;
};
const initTableTypes = async (Type) => {
  const { data } = await axios(`${URL}/type`);
  const type = data.results.map((type) => ({ ["Nombre"]: type.name }));
  (await Type.count()) === 0 ? await Type.bulkCreate(type) : Type;
};
module.exports = { dataFind, initTableTypes };
