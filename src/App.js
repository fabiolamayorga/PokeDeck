import React from "react";
import Container from "@material-ui/core/Container";
import Deck from "./components/Deck";

import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <Container>
        <h1>Pokemon Deck</h1>
        <Deck />
      </Container>
    </div>
  );
};

export default App;
