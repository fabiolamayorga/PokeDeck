import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import { makeStyles } from "@material-ui/core/styles";

import DeckImage from "./DeckImage";
import DeckContent from "./DeckContent";
import DeckControllers from "./DeckControllers";
import Search from "./Search";

import { fetchPokemon, fetchAllPokemons } from "../actions/index";

const useStyles = makeStyles({
  imageWrapper: {
    width: "80%",
    height: 250,
    borderRadius: "5px",
    margin: "30px auto 0",
    backgroundColor: "#41CAE6"
  },

  contentWrapper: {
    maxWidth: "400px",
    margin: "0 auto",
    backgroundColor: "#FF6347",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },

  searchWrapper: {
    width: "90%"
  }
});

/**
 * Deck component that holds all information
 */

const Deck = () => {
  const maximun = 150;
  const minimun = 1;
  const [count, setCount] = useState(minimun);

  /**
   * Function to retreive the previous pokemon
   */
  const getPrev = () => setCount(count === minimun ? maximun : count - 1);

  /**
   * Function to retreieve the next pokemon
   */
  const getNext = () => setCount(count === maximun ? minimun : count + 1);

  /** Function that handles the search functionality */
  const getSelectedValue = (e, v, pokemonList) => {
    let currentPokemon = pokemonList.filter(item => item.name === v);
    if (typeof currentPokemon[0] !== "undefined")
      setCount(currentPokemon[0].id);
  };

  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(fetchPokemon(count));
    dispatch(fetchAllPokemons());
  }, [dispatch, count]);

  return (
    <>
      <Card className={classes.contentWrapper}>
        <CardContent className={classes.searchWrapper}>
          <Search setCount={setCount} getSelectedValue={getSelectedValue} />
        </CardContent>
        <CardContent className={classes.imageWrapper}>
          <DeckImage />
        </CardContent>
        <DeckControllers getPrev={getPrev} getNext={getNext} />
        <DeckContent />
      </Card>
    </>
  );
};

export default Deck;
