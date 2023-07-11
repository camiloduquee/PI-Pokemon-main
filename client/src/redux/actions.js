import axios from "axios";
import { ALL_POKEMONS, ALL_TYPES } from "./actions-types";


export const allPokemons = (URL) => {
    return async function (dispatch) {
    const timeout = 60000;
    const {data} = await axios.get(URL, { timeout });
    dispatch({ type: ALL_POKEMONS, payload: data });
  };
};
export const allTypes = (URL) => {
  return async function (dispatch) {
  const {data} = await axios.get(URL);
  dispatch({ type: ALL_TYPES, payload: data });
};
};