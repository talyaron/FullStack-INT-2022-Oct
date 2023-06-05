import { useState, useEffect } from 'react';
import StudentNames from './comps/StudentNames/studentNames';
// import PopUp from './comps/PopUp/PopUp';
import './App.css'
// import { compileString } from 'sass';

// import ShowInScreen from './comps/ShowInScreen/showInScreen';


interface StudentNames {
  name:string;
};

function App() {

  try {
  const studentNames : StudentNames [] =[
    {name: "Daniel"}, {name: "Rachel"}, {name: "Abigail"}, {name: "Adiela"}, {name: "Alma"}, {name: "Amit"}, {name: "Aviv"}, 
    {name: "Bella"}, {name: "Bina"}, {name: "Coris"}, {name: "Dafna"}, {name: "Daniel"}, {name: "Derora"}, {name: "Dor"}, 
    {name: "Dror"},  {name: "Eli"}, {name: "Ella"}, {name: "Faria"}, {name: "Fiona"}, {name: "Gefen"}, {name: "Hadar"}, 
    {name: "Hadas"}, {name: "Harel"}, {name: "Hili"}, {name: "Hodaya"}, {name: "Ilana"}, {name: "Inbar"}, {name: "Irit"}, {name: "Jaffa"}, 
    {name: "Jincy"},  {name: "Kineret"}, {name: "Kochava"}, {name: "Laila or Leila"}, {name: "Lenny"}, {name: "Lia"}, 
    {name: "Libi"}, {name: "Linoy"}, {name: "Maayan"}, {name: "Meirav"}, {name: "Meital"}, {name: "Noah"}, {name: "Noam"}, {name: "Ophir"}, 
    {name: "Or"}, {name: "Ori"}, {name: "Peri"}, {name: "Renana"}, {name: "Rina"}, {name: "Risha"}, {name: "Rotem "}, {name: "Sapir"}, 
    {name: "Sarit"}, {name: "Shai"}, {name: "Shir"}, {name: "Shosh"}, {name: "Sivan"}, {name: "Tal"}, {name: "Talma"}, {name: "Tikva"}, 
    {name: "Tsipi"}, {name: "Yael"}, {name: "Yarden"}, {name: "Yuval"}, {name: "Zohar"},
  ];

  // const [showPopup, setShopPopup] = useState(false)
  
  const itemsPerPage = 8;
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItems = studentNames.slice(currentIndex, 
        currentIndex + itemsPerPage
  );
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((currentIndex + itemsPerPage) % studentNames.length);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [currentIndex, studentNames.length, itemsPerPage]);
  function hendelCatchName(){
    console.log("QQQQQQQQQQQQQQQQQQQQQQQQ")
  }
  
  // const hendelCatchName = /
  return (
    <div>
      <button onClick={hendelCatchName} className='catchName' >Choose Name</button>
      {currentItems.map((studentNames, index) => (
      <div key={index}><StudentNames name={studentNames}/></div>
      ))}
    </div>
  );
    
} catch (error) {
  console.error(error)    
}
};

export default App;
