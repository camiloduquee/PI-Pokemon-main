import { ALL_POKEMONS } from "./actions-types";

const initialState = {
    allPokemons: [],
}

const roorReducer = (state = initialState, action) => {
    switch(action.type) {
        case ALL_POKEMONS:
            return {
                ...state,
                allPokemons: action.payload,
            }
        default:
            return {
                ...state
            }
    }
}
export default roorReducer;