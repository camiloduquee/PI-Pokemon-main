import axios from "axios";
import { endpointPost } from "../../helpers/variables";

const postForm = async (newPokemon) => {
  try {
    const { data } = await axios.post(endpointPost, newPokemon);
      return data[0];
  } catch (error) {
      return { Error: error.response.data };
  }
};
export default postForm;
