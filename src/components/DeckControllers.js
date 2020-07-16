import React from "react";
import CardActions from "@material-ui/core/CardActions";

import IconButton from "@material-ui/core/IconButton";

import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  controlWrapper: {
    display: "flex",
    justifyContent: "center"
  }
});

/**
 * Component to render the prev and next buttons
 */
const DeckController = ({ getPrev, getNext }) => {
  const classes = useStyles();

  return (
    <CardActions className={classes.controlWrapper}>
      <IconButton onClick={() => getPrev()}>
        <NavigateBeforeIcon />
      </IconButton>
      <IconButton onClick={() => getNext()}>
        <NavigateNextIcon />
      </IconButton>
    </CardActions>
  );
};

export default DeckController;
