import React from "react";

import Cell from "./Cell";
import "./Grid.css";

const Grid = props => {
  return (
    <div className="grid">
      <div className="row">
        <Cell isXTurn={props.isXTurn} nextTurn={props.nextTurn} />
        <Cell isXTurn={props.isXTurn} nextTurn={props.nextTurn} />
        <Cell isXTurn={props.isXTurn} nextTurn={props.nextTurn} />
      </div>
      <div className="row">
        <Cell isXTurn={props.isXTurn} nextTurn={props.nextTurn} />
        <Cell isXTurn={props.isXTurn} nextTurn={props.nextTurn} />
        <Cell isXTurn={props.isXTurn} nextTurn={props.nextTurn} />
      </div>
      <div className="row">
        <Cell isXTurn={props.isXTurn} nextTurn={props.nextTurn} />
        <Cell isXTurn={props.isXTurn} nextTurn={props.nextTurn} />
        <Cell isXTurn={props.isXTurn} nextTurn={props.nextTurn} />
      </div>
    </div>
  );
};

export default Grid;
