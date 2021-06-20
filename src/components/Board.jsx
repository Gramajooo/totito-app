import Cell from "./Cell";

const Board = ({ cell, onClick }) => (
  <div className="board">
    {cell.map((cell, i) => (
      <Cell key={i} value={cell} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default Board;
