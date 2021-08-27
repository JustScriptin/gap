import React, { useReducer } from "react";
import Board from "../Board/Board";

const reducer = (state, action) => {
  switch (action.type) {
    case "REWIND":
      return {
        ...state,
        xIsNext: action.payload.step % 2 === 0,
        history: state.history.slice(0, action.payload.step + 1),
      };
    case "MOVE":
      return {
        ...state,
        history: state.history.concat({
          squares: action.payload.squares,
        }),
        xIsNext: !state.xIsNext,
      };
    default:
      return state;
  }
};

function TicTacToe() {
  const initialState = {
    history: [{ squares: Array(9).fill(null) }],
    xIsNext: true,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { xIsNext, history } = state;
  const rewindTo = (step) => {
    dispatch({ type: "REWIND", payload: { step } });
  };
  const start = () =>
    history.map((step, move) => {
      const buttonLabel = move ? "Rewind" : "Start Game";
      const lastMove = move;
      const rewind = rewindTo(move);
      return {
        label: buttonLabel,
        move: lastMove,
        goBack: rewind,
      };
    });

  const test = start();

  //console.log(start()[0].label);

  const handleClick = (i) => {
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const winner = findWinner(squares);
    if (winner || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "x" : "0";
    dispatch({ type: "MOVE", payload: { squares } });
  };
  const current = history[history.length - 1];
  const winner = findWinner(current.squares);
  const turn = winner
    ? winner === "D"
      ? "Draw"
      : `The Winner is ${winner}`
    : `The next player is ${xIsNext ? "x" : "o"}`;
  return (
    <div>
      <div className="ticTacToeBoard">
        <Board
          squares={current.squares}
          onClick={(i) => handleClick(i)}
        ></Board>
      </div>
      <div className="ticTacToeOptions">
        <div>{turn}</div>
        <button onClick={start}>Restart</button>
        <button>Rewind</button>
      </div>
    </div>
  );
}
const findWinner = (squares) => {
  return null;
};
export default TicTacToe;
