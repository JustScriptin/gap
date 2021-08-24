import React from "react";
import Board from "./Board";

function TicTacToe() {
  const turn = "It's O's Turn";
  const start = <button>Start Game</button>;
  const rewind = <button>Rewind</button>;
  return (
    <div>
      <div className="ticTacToeBoard">
        <Board></Board>
      </div>
      <div className="ticTacToeOptions">
        <div>{turn}</div>
        <div>{start}</div>
        <div>{rewind}</div>
      </div>
    </div>
  );
}

export default TicTacToe;
