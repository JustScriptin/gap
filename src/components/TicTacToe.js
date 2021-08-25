import React from "react";
import Board from "./Board";

function TicTacToe() {
  const turn = "It's O's Turn";
  const start = <button>Start Game</button>;
  const rewind = <button>Rewind</button>;
  const squares = Array(9).fill(null);
  return (
    <div>
      <h1>This is Tic Tac Toe</h1>
      <div className="ticTacToeBoard">
        <Board squares={squares}></Board>
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
