import React from "react";
import BoardSquares from "./BoardSquares";

function Board(props) {
  return (
    <div className="board">
      <div>
        <BoardSquares
          value={props.squares[0]}
          onClick={() => props.onClick(0)}
        />
        <BoardSquares
          value={props.squares[1]}
          onClick={() => props.onClick(1)}
        />
        <BoardSquares
          value={props.squares[2]}
          onClick={() => props.onClick(2)}
        />
      </div>
      <div>
        <BoardSquares
          value={props.squares[3]}
          onClick={() => props.onClick(3)}
        />
        <BoardSquares
          value={props.squares[4]}
          onClick={() => props.onClick(4)}
        />
        <BoardSquares
          value={props.squares[5]}
          onClick={() => props.onClick(5)}
        />
      </div>
      <div>
        <BoardSquares
          value={props.squares[6]}
          onClick={() => props.onClick(6)}
        />
        <BoardSquares
          value={props.squares[7]}
          onClick={() => props.onClick(7)}
        />
        <BoardSquares
          value={props.squares[8]}
          onClick={() => props.onClick(8)}
        />
      </div>
    </div>
  );
}

export default Board;
