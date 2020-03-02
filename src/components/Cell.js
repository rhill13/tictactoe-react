import React, { useState } from "react";

import "./Cell.css";

const Cell = props => {
  let [state, changeState] = useState("");

  const cellClickedHandler = e => {
    e.preventDefault();
    if (props.isXTurn) {
      changeState("X");
      props.nextTurn();
    } else {
      changeState("O");
      props.nextTurn();
    }
  };

  return (
    <button className="cell" onClick={cellClickedHandler}>
      {state}
    </button>
  );
};

export default Cell;
