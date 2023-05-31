import './App.css'
import Box from "./components/box";

const names : Array<string> = ["itay", "tal", "tomer", "vladi", "orel"]


function App() {

  return (

      <div>
        <h1>hi</h1>
        <p>test</p>
        {/* <Box text="btn-1"/>
        <Box text="btn-2"/>
        <Box text="btn-3"/> */}
        {names.map(name => <Box text={name}/>)}
      </div>
  )
}

export default App
