import {
  ALL_POKEMONS,
  ALL_TYPES,
  FILTER_TYPES,
  FILTER_ORIGEN,
  ORDEN,
  ORDEN_ALFA,
  ORDEN_ATTACK,
} from "./actions-types";

const initialState = {
  allTypes: [],
  allPokemons: [],
  pokemonsFilter: [],
 };

const roorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_POKEMONS:
      return {
        ...state,
        allPokemons: action.payload.results,
        pokemonsFilter: action.payload.results,
        };
    case ALL_TYPES:
      return {
        ...state,
        allTypes: action.payload,
      };
    case FILTER_TYPES:
      const filterType = () => {
        if (action.payload === "All") return state.allPokemons;

        let filter = state.allPokemons.filter((pokemon) =>
          pokemon.Types.map((type) => type.Nombre).includes(action.payload)
        );
        return filter;
      };
      return {
        ...state,
        pokemonsFilter: filterType(),
      };
    case FILTER_ORIGEN:
      const comparatorOrder = () => {
        if (action.payload === "API") return state.pokemonsFilter;

        let filter = state.pokemonsFilter.filter(
          (pokemon) => typeof pokemon.ID === "string"
        );

        return filter;
      };
      return {
        ...state,
        pokemonsFilter: comparatorOrder(),
      };
    case ORDEN:
      const comparator = (a, b) =>
        action.payload === "Ascendente" ? a.ID - b.ID : b.ID - a.ID;
      return {
        ...state,
        pokemonsFilter: [...state.pokemonsFilter].sort(comparator),
      };
    case ORDEN_ALFA:
      return {
        ...state,
        pokemonsFilter: action.payload ? [...state.pokemonsFilter].sort((a, b) => a.Nombre.localeCompare(b.Nombre)):state.pokemonsFilter
      };
    case ORDEN_ATTACK:
      return {
        ...state,
        pokemonsFilter: action.payload
          ? [...state.pokemonsFilter].sort((a, b) => b.Ataque - a.Ataque)
          : state.pokemonsFilter,
      };

    default:
      return {
        ...state,
      };
  }
};
export default roorReducer;
