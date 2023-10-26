import './Main.css';
import Pannel from '../Pannel/Pannel';
import Board from '../Board/Board';

import { useState } from 'react';

function Main() {
  const [color, setColor] = useState("red");
  const [size, setSize] = useState(32);

  return (
    <div className="main">
      <Pannel color={color} setColor={setColor}
              size={size} setSize={setSize}/>
      <Board color={color} size={size}/>
    </div>
  );
}

export default Main;