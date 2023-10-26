import './Board.css';
import Cell from './Cell';

function Board({color, size}) {
  function renderBoard(W, H) {
    let cells = [];
    for (let i=0; i<H; i++) {
      for (let j=0; j<W; j++) {
        cells.push(<Cell color={color}></Cell>)
      }
      cells.push(<br/>)
    }
  
    return cells;
  }

  return (
    <div className="board-wrapper">
      <div className='board'>
      {renderBoard(size, size)}
      </div>
    </div>
  );
}

export default Board;