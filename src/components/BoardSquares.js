import React from "react";

function BoardSquares(props) {
  return (
    <button className="boardSquaresButton" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default BoardSquares;
