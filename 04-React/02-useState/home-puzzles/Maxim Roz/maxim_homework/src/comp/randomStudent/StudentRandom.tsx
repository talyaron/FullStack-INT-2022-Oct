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
  { name: 'Emily', color: 'aqua' },

];
const colorTab = [
  { color: 'red' },
  { color: 'blue' },
  { color: 'green' },
  { color: 'darkviolet' },
  { color: 'goldenrod' },
  { color: 'hotpink' },
  { color: 'firebrick' },
  { color: 'mediumslateblue' },
  { color: 'sandybrown' },
  {  color: 'aqua' },

];

const StudentRandom = () => {
  const randomIndex = getRandomNumber() % studentTab.length;
  const randomStudent = studentTab[randomIndex];

  return (
    <div>
      <div className='randomStudent' style={{ background: colorTab[getRandomNumber()].color }}>
        {randomStudent.name}
      </div>
    </div>
  );
};

export default StudentRandom;


