import axios from "axios";
import { ALL_POKEMONS, ALL_TYPES, FILTER_TYPES, FILTER_ORIGEN, ORDEN, ORDEN_ALFA, ORDEN_ATTACK } from "./actions-types";

export const allPokemons = (URL) => {
  return async function (dispatch) {
     const { data } = await axios.get(URL);
    dispatch({ type: ALL_POKEMONS, payload: data });
  };
};
export const allTypes = (URL) => {
  return async function (dispatch) {
    const { data } = await axios.get(URL);
    dispatch({ type: ALL_TYPES, payload: data });
  };
};
export const filterType = (types) => {
  return {
    type: FILTER_TYPES,
    payload: types
  }  
}
export const filterOrigen = (value) => {
  return {
    type: FILTER_ORIGEN,
    payload: value
  }  
}
export const filterOrden = (value) => {
  return {
    type: ORDEN,
    payload: value
  }  
}
export const filterAlfa = (value) => {
  return {
    type: ORDEN_ALFA,
    payload: value
  }  
}
export const filterAttack = (value) => {
  return {
    type: ORDEN_ATTACK,
    payload: value
  }  
}