import './Cell.css';

export default function Cell({color}) {
  function handleColor(e) {
    e.target.style.backgroundColor = color;
    console.log(color)
  }

  return (
    <span className='cell' onClick={handleColor}></span>
  );
}