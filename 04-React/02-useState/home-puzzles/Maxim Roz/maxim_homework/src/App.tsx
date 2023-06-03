import { useState } from 'react';
import './App.css';
import StudentRandom from './comp/randomStudent/StudentRandom';
import { getRandomNumber } from './comp/randomStudent/randomUtils';

function App() {
  const [generatedNumber, setGeneratedNumber] = useState<number>();

  const handleClick = () => {
    const number = getRandomNumber();
    setGeneratedNumber(number);
  };

  return (
    <>
      <div>
        <button onClick={handleClick}>
          <StudentRandom />
        </button>
      </div>
    </>
  );
}

export default App;
