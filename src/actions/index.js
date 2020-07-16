import {
  FETCHING,
  SUCCESS,
  SET_CURRENT_ID,
  FETCH_ALL_POKEMONS,
  SUCCESS_ALL_POKEMON
} from "./action.types";

const requestPokemons = id => {
  return {
    type: FETCHING,
    response: id
  };
};

const receivePokemons = json => {
  return {
    type: SUCCESS,
    response: {
      id: json.id,
      name: json.name,
      height: json.height,
      weight: json.weight,
      img: json.sprites.front_default
    }
  };
};

const setCurrentPokemon = id => {
  return {
    type: SET_CURRENT_ID,
    response: id
  };
};

/**
 * Initial fetch to get first pokemon
 */
export const fetchPokemon = id => {
  return dispatch => {
    dispatch(requestPokemons(id));
    dispatch(setCurrentPokemon(id));

    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => response.json())
      .then(json => dispatch(receivePokemons(json)));
  };
};

const requestAllPokemons = () => {
  return {
    type: FETCH_ALL_POKEMONS
  };
};

const requestReceiveAllPokemons = json => {
  let pokemons = [];
  json.results.forEach((result, index) => {
    pokemons.push({ name: result.name, id: index + 1 });
  });

  return {
    type: SUCCESS_ALL_POKEMON,
    response: pokemons
  };
};

/**
 * Retrieves all pokemons from 1 to 150
 */
export const fetchAllPokemons = () => {
  return dispatch => {
    dispatch(requestAllPokemons());

    return fetch(`https://pokeapi.co/api/v2/pokemon?limit=150`)
      .then(response => response.json())
      .then(json => dispatch(requestReceiveAllPokemons(json)));
  };
};
