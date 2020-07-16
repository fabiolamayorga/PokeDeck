import {
  FETCHING,
  SUCCESS,
  ERROR,
  SET_CURRENT_ID,
  FETCH_ALL_POKEMONS,
  SUCCESS_ALL_POKEMON
} from "../actions/action.types";

export const initialState = {
  status: null,
  pokemonAttributes: null,
  allPokemons: null,
  currentId: 1
};

const reducer = (state = initialState, { type, response } = {}) => {
  switch (type) {
    case FETCHING:
      return {
        ...state,
        status: FETCHING,
        currentId: response,
        pokemonAttributes: null
      };
    case SUCCESS:
      return { ...state, status: SUCCESS, pokemonAttributes: response };
    case ERROR:
      return { ...state, status: ERROR, response, currentId: response.id };
    case SET_CURRENT_ID:
      return { ...state, status: SUCCESS, currentId: response };
    case FETCH_ALL_POKEMONS:
      return { ...state, status: FETCH_ALL_POKEMONS };
    case SUCCESS_ALL_POKEMON:
      return { ...state, status: SUCCESS_ALL_POKEMON, allPokemons: response };
    default:
      return state;
  }
};

export default reducer;
