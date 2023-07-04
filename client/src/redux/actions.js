import axios from "axios";
import { ALL_POKEMONS } from "./actions-types";
const URL = "http://localhost:3001/pokemons/";

export const allPokemons = () => async (dispatch) => {
    
    return await axios(URL).then(({ data }) => {
        return dispatch({
          type: "ALL_POKEMONS",
          payload: data,
        });
      });    
}