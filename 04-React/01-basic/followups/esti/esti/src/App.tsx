import "./App.css";
import Box from "./components/box/Box";

const names:Array<string>= ["zohar", "hilla", "liron", "david"]

function App() {

//JSX
  return (
    <div>
      <h1>React 3</h1>
      <p>Hi</p>
      <Box text="Hi" />
      <Box text="Bye"/>
      <Box text="whatsapp"/>
      <Box text="great!!"/>
      {names.map((name) => {
      <Box text = {name}/>
      ))}
    </div>
    
  );
}

export default App;
