// import { FC, useState } from "react";
import { FC } from "react";
import "./studentNames.scss"

interface StudentsProps {
  name: string[],
}


const StudentName: FC<StudentsProps> = ({name}) => {
    const getRandomColor = () => {
        const color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        return color;
      };
    
      const boxStyle = {
        backgroundColor: getRandomColor(),
        width: '200px',
        height: '50px',
      };
    
     
    return (
      <div className="container">
        <div className="studentNameContainer">
            <div className="studentName" style={boxStyle}>
                {name} 
            </div>
        </div>
      </div>
      
    );
  };
  

export default StudentName;