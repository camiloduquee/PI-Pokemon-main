import axios from "axios";
import { ALL_POKEMONS } from "./actions-types";
const URL = "http://localhost:3001/pokemons/";

export const allPokemons = () => {
  return async function (dispatch) {
    const {data} = await axios.get(`${URL}?offset=${0}&limit=${100}`);
    dispatch({ type: ALL_POKEMONS, payload: data });
  };
};
