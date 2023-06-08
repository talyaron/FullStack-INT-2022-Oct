import './App.css'
import TableImg from './components/TableImg/TableImg';

interface Student{
  name:string,
  isSit:boolean; 
}
const student1:Student = {name:"ilan",isSit:false};
const student2:Student = {name:"Hana",isSit:false};

//const studentsArr[]:Student = new Array(
  // student1,student2
//)

function App() {
  
  return ( 
    <div className='class'>
      <h1>My class</h1>
      <div>
        <TableImg/>
      </div>
      <div>
        <TableImg/>
      </div>
      <div>
        <TableImg/>
      </div>
      <div>
        <TableImg/>
      </div>
      <div>

      </div>
    </div>
  )
}

export default App;
