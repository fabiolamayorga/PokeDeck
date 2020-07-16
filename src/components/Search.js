import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

import { fetchAllPokemons } from "../actions/index";

const Search = ({ setCount, getSelectedValue }) => {
  const pokemonList = useSelector(state => state.allPokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch(fetchPokemon(count));
    dispatch(fetchAllPokemons());
  }, [dispatch]);

  if (!pokemonList) {
    return <div />;
  }

  return (
    <Autocomplete
      id="free-solo-demo"
      freeSolo
      options={pokemonList.map(option => option.name)}
      //getOptionSelected=()
      onChange={(event, value) => getSelectedValue(event, value, pokemonList)}
      renderInput={params => (
        <TextField
          {...params}
          label="Let's find a Pokemon!"
          margin="normal"
          variant="outlined"
        />
      )}
    />
  );
};

export default Search;
