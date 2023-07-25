import axios from "axios";
import { endpoint } from "../../helpers/variables";

const postForm = async (newPokemon) => {
  try {
    const { data } = await axios.post(`${endpoint}/pokemons`, newPokemon);
      return data[0];
  } catch (error) {
      return { Error: error.response.data };
  }
};
export default postForm;
