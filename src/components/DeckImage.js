import React from "react";
import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";

import CardMedia from "@material-ui/core/CardMedia";
import DeckImageLoader from "./DeckImageLoader";

const useStyles = makeStyles({
  image: {
    width: "100%",
    height: "100%"
  }
});

/**
 * Component to render the image of the pokemon
 */
const DeckImage = () => {
  const classes = useStyles();
  const pokemon = useSelector(state => state.pokemonAttributes);
  if (!pokemon?.img) {
    return <DeckImageLoader />;
  }

  return (
    <CardMedia
      component="img"
      image={pokemon.img}
      height="140"
      className={classes.image}
    />
  );
};

export default DeckImage;
