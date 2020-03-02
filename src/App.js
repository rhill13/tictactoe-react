import React, { useState } from "react";

import Grid from "./components/Grid";
import "./App.css";

const App = () => {
  const [xTurn, setXTurn] = useState(true);

  const [gridStatus, setGridStatus] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ]);

  const nextTurnHandler = () => {
    setXTurn(!xTurn);
  };

  const resetButtonHandler = e => {
    e.preventDefault();
    setXTurn(true);
  };

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <Grid
        isXTurn={xTurn}
        nextTurn={nextTurnHandler}
        gridArr={gridStatus}
        cellSelected={setGridStatus}
      />
      <button className="reset-button" onClick={resetButtonHandler}>
        Reset (Doesn't work)
      </button>
    </div>
  );
};

export default App;
