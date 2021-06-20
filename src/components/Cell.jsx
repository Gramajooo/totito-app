const Cell = ({ value, onClick }) => {
  const style = value ? `cell ${value}` : `cell`;

  return (
    <div className={style} onClick={onClick}>
      {value}
    </div>
  );
};

export default Cell;
