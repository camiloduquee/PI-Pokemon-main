import axios from "axios";
import { endpoint } from "../../helpers/variables";

const getName = async(name) => {
  try {
    if(name.length === 36) {
      const { data } = await axios(`${endpoint}/${name}`); 
      return data; 
    }
    const { data } = await axios(`${endpoint}?name=${name}`);
    return data;
  } catch (error) {
    return { Error: error.response.data };
  }
}
export default getName;
