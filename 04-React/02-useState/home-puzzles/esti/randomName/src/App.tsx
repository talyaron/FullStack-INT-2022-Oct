import { useState, useEffect } from 'react';
import StudentName from './components/StudentNames/studentNames';
import RandomName from './components/RandomName/randomName';


import './app.scss'


interface StudentName {
  name:string;
};

interface RandomName {
  name:string;
};

function App() {


  const names : StudentName [] =[
    {name: "Daniel"}, {name: "Rachel"}, {name: "Abigail"}, {name: "Adiela"}, {name: "Alma"}, {name: "Amit"}, {name: "Aviv"}, 
    {name: "Bella"}, {name: "Bina"}, {name: "Coris"}, {name: "Dafna"}, {name: "Daniel"}, {name: "Derora"}, {name: "Dor"}, 
    {name: "Dror"}, {name: "Eden"}, {name: "Eli"}, {name: "Ella"}, {name: "Faria"}, {name: "Fiona"}, {name: "Gefen"}, {name: "Hadar"}, 
    {name: "Hadas"}, {name: "Harel"}, {name: "Hili"}, {name: "Hodaya"}, {name: "Ilana"}, {name: "Inbar"}, {name: "Irit"}, {name: "Jaffa"}, 
    {name: "Jincy"},  {name: "Kineret"},  {name: "Laila or Leila"}, {name: "Lenny"}, {name: "Lia"}, 
    {name: "Libi"}, {name: "Linoy"}, {name: "Maayan"}, {name: "Meirav"}, {name: "Meital"}, {name: "Noah"}, {name: "Noam"}, {name: "Ophir"}, 
    {name: "Or"}, {name: "Ori"}, {name: "Peri"}, {name: "Renana"}, {name: "Rina"}, {name: "Risha"}, {name: "Rotem "}, {name: "Sapir"}, 
    {name: "Sarit"}, {name: "Shai"}, {name: "Shir"}, {name: "Shosh"}, {name: "Sivan"}, {name: "Tal"}, {name: "Talma"}, {name: "Tikva"}, 
    {name: "Tsipi"}, {name: "Yael"}, {name: "Yarden"}, {name: "Yuval"}, {name: "Zohar"},
  ];

  const itemsPerPage = 8;
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItems = names.slice(currentIndex, 
        currentIndex + itemsPerPage
  );
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((currentIndex + itemsPerPage) % names.length);
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, [currentIndex, names.length, itemsPerPage]);
  
  function hendelCatchName(){
    console.log("")
    return(
      <div>
      {/* <h1>Random Name Generator</h1> */}
      <RandomName names={names} />
    </div>
  );
    

  }

  return (
    <div>
      <button className='catchName' onClick={hendelCatchName}>Choos Name</button>
      {currentItems.map((name, index) => (
        <div key={index}><StudentName name={name.name}/></div>
      ))}
    </div>
  );
};

export default App;
