import './Pannel.css';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

function Pannel({color, setColor, size, setSize}) {
  const handleColor = e => setColor( state => e.target.id );
  const handleDownload = e => domtoimage.toBlob(document.querySelector('.board')).then(blob => (saveAs(blob, 'image.png')));
  const handleSizeChange = e => setSize( state => e.target.value );

  return (
    <div className="pannel">
      <h1>Select Color, Now: <span style={{color: color}}>◼︎</span></h1>
      <button id="red" onClick={handleColor}>red</button>
      <button id="green" onClick={handleColor}>green</button>
      <button id="blue" onClick={handleColor}>blue</button>
      <button id="white" onClick={handleColor}>white</button>
      <button id="black" onClick={handleColor}>black</button>
      <br/>
      <h1>Resize:</h1>
      <input type="range" onChange={handleSizeChange} value={size} min="10" max="32" style={{width: "100%"}}/>
      <br/>
      <h1>Download image:</h1>
      <button onClick={handleDownload}>Download Image</button>
    </div>
  );
}

export default Pannel;