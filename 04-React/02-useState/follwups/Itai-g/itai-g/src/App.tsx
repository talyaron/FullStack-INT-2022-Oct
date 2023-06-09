import { useState } from 'react';
import PopUp from './componnets/popUp/PopUp';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState(true);

  const handlePopUp = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const handleRandomName = () => {
    const names = ['yossi', 'moshe', 'david', 'elior'];
    const randomIndex = Math.floor(Math.random() * names.length);
    setName(names[randomIndex]);
  };

  const handleColor = () => {
    setColor((color) => !color);
  };

  return (
    <div className="container">
      <div>
        <button onClick={handleRandomName}>{name ? 'Switch Name' : 'Generate Name'}</button>
        <button onClick={handleColor}>{color ? 'Remove Color' : 'Add Color'}</button>
        <button onClick={handlePopUp}>{isOpen ? 'Close' : 'Open'}</button>
        {isOpen && <PopUp count={name} />}
      </div>
    </div>
  );
}


export default App;