import React from 'react';
import './studentRandom.scss';
import { getRandomNumber } from '../randomStudent/randomUtils';

const studentTab = [
  { name: 'Maxim', color: 'red' },
  { name: 'Itzhak', color: 'blue' },
  { name: 'Moshe', color: 'green' },
  { name: 'David', color: 'darkviolet' },
  { name: 'Hanna', color: 'goldenrod' },
  { name: 'Noa', color: 'hotpink' },
  { name: 'Shlomo', color: 'firebrick' },
  { name: 'Izabel', color: 'mediumslateblue' },
  { name: 'Noah', color: 'sandybrown' },
  { name: 'David', color: 'aqua' },

];

const StudentRandom = () => {
  const randomIndex = getRandomNumber() % studentTab.length;
  const randomStudent = studentTab[randomIndex];

  return (
    <div>
      <div className='randomStudent' style={{ background: randomStudent.color }}>
        {randomStudent.name}
      </div>
    </div>
  );
};

export default StudentRandom;


