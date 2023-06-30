const pokemonsType = require("../controllers/pokemonsType");
const getTypes = async (req, res) => {
  try {
    const typeAll = await pokemonsType();
    res.status(200).json(typeAll);
  } catch (error) {
    res.status(404).json(error.message);
  }
};
module.exports = getTypes;
