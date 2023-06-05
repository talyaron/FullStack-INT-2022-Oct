import './wheel.scss'

import { useState } from 'react';
interface NamePrompt{
    names:Array<string>
}
const SpinningWheel:React.FC<NamePrompt> = ({ names }) => {
  const [spinning, setSpinning] = useState(false);
  const [selectedName, setSelectedName] = useState('');

  const spinWheel = () => {
    setSpinning(true);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * names.length);
      const name = names[randomIndex];
      setSelectedName(name);
      setSpinning(false);
    }, 2000);
  };

  return (
    <div>
      <div className={`wheel ${spinning ? 'spinning' : ''}`}>
        🎡
      </div>
      <button disabled={spinning} onClick={spinWheel}>
        {spinning ? 'Spinning...' : 'Spin'}
      </button>
      {selectedName && <div>Selected Name: {selectedName}</div>}
    </div>
  );
};

export default SpinningWheel;