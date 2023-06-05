import Header from './components/header/header';
import Btn from './components/button/btn';
import Students from './components/studentsList/students';

const students = [
  {name: "Daniel"}, {name: "Rachel"}, {name: "Abigail"}, {name: "Adiela"}, {name: "Alma"}, 
  {name: "Amit"}, 
  {name: "Aviv"}, 
]


function App() {
  return (
    <div className='root'>
     <Header />
     <Btn />
     <Students  />
    </div>
  )
}

export default App
