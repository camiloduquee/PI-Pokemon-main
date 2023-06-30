const { Type } = require("../db");

const pokemonsType = async () => {
  const typesAll = await Type.findAll();
  return typesAll;
};
module.exports = pokemonsType;
