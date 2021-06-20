import "./App.css";
import { useState } from "react";
import Board from "./components/Board";

const App = () => {
  const [board, setBoard] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xTurno, setXTurno] = useState(true);
  const ganador = lineWinner(board[stepNumber]);
  const pintado = xTurno ? "X" : "O";

  function lineWinner(cell) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (cell[a] && cell[a] === cell[b] && cell[a] === cell[c]) {
        return cell[a];
      }
    }
    return null;
  }
  const handleClick = (i) => {
    const boardPoint = board.slice(0, stepNumber + 1);
    const cell = [...boardPoint[stepNumber]];
    if (ganador || cell[i]) return;
    cell[i] = pintado;
    setBoard([...boardPoint, cell]);
    setStepNumber(boardPoint.length);
    setXTurno(!xTurno);
  };

  return (
    <div className="App">
      <Board cell={board[stepNumber]} onClick={handleClick} />
      <h3>
        {ganador
          ? alert("Ganador: " + ganador)
          : "Siguiente jugador: " + pintado}
      </h3>
    </div>
  );
};

export default App;
