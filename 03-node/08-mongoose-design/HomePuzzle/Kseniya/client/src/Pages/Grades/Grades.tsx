import  { FC, useEffect, useState } from 'react';
import './Grades.css'
import axios from 'axios';
import { IGrade } from './IGrade';

const Grades:FC = () => {

    const [grades, setGrades] = useState<IGrade[]>([] as IGrade[])

    useEffect(() => {
      try {
        axios.get<IGrade[]>("http://localhost:3001/grades/all").then(({ data }) => {
            console.log(data);
            setGrades(data);
          });
      } catch (error) {
        console.log(error);
      }
 } , [])
    


    return (
        <div className='GradesWrapper'>
           <div className='title'>All Grades</div>
        </div>
    );
};

export default Grades;