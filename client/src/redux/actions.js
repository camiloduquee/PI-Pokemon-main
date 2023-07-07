import axios from "axios";
import { ALL_POKEMONS } from "./actions-types";
// const URL = "http://localhost:3001/pokemons/";

export const allPokemons = (URL) => {
    return async function (dispatch) {
    const timeout = 60000;
    const {data} = await axios.get(URL, { timeout });
    dispatch({ type: ALL_POKEMONS, payload: data });
  };
};
