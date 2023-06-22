import React, { useState, FC } from 'react';

interface RandomNameProps {
    name:string;
  };
  
  
  console.log("XXXXX")
const RandomName: FC<{ names: RandomNameProps[] }> = ({ names }) => {
  const [randomName, setRandomName] = useState('');

    const randomIndex = Math.floor(Math.random() * names.length);
    setRandomName(names[randomIndex].name);

    const getRandomColor = () => {
      const color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
      return color;
    };
  
    const boxStyle = {
      backgroundColor: getRandomColor(),
      width: '500px',
      height: '500px',
    };
  
   
  return (
    <div className="container">
      <div className="studentNameContainer">
          Testim
          <div className="studentName" style={boxStyle}>
          {randomName && <p>Random Name: {randomName}</p>} 
          </div>
      </div>
    </div>
    
  );
  // return (
    
    // <div>

    // {randomName && <p>Random Name: {randomName}</p>}
    // </div>
  // );
};

export default RandomName;
