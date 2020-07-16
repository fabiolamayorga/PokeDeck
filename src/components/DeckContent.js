import React from "react";
import { useSelector } from "react-redux";

import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

import DeckContentLoader from "./DeckContentLoader";

const useStyles = makeStyles({
  contenWrapper: {
    paddingBottom: "24px",
    backgroundColor: "#E6593F",
    width: "80%",
    borderRadius: "5px",
    marginBottom: "20px"
  }
});

/**
 * Component to render the information of the pokemon
 */

const DeckContent = () => {
  const pokemon = useSelector(state => state.pokemonAttributes);
  const classes = useStyles();

  if (!pokemon) {
    return <DeckContentLoader />;
  }

  return (
    <CardContent className={classes.contenWrapper}>
      <Typography gutterBottom variant="h5" component="h2">
        # {pokemon.id}
      </Typography>
      <Typography gutterBottom variant="h5" component="h3">
        Name: {pokemon.name}
      </Typography>
      <Typography gutterBottom variant="h5" component="h3">
        Weight: {pokemon.weight} kg
      </Typography>
      <Typography gutterBottom variant="h5" component="h3">
        Height: {pokemon.height} m
      </Typography>
    </CardContent>
  );
};

export default DeckContent;
