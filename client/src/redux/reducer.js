import { ALL_POKEMONS, ALL_TYPES } from "./actions-types";

const initialState = {
    allPokemons: [],
    allTypes:[]
}

const roorReducer = (state = initialState, action) => {
    switch(action.type) {
        case ALL_POKEMONS:
            return {
                ...state,
                allPokemons: action.payload
            }
        case ALL_TYPES:
                return {
                    ...state,
                    allTypes: action.payload
                }
        
        default:
            return {
                ...state
            }
    }
}
export default roorReducer;