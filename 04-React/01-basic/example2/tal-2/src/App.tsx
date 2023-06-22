import "./App.css";
import Box from "./components/box/Box";

const words = ["h1", "bye", "go"];

function App() {
  //JSX
  return (
    <div>
      <h1>React 3</h1>
      <p>Hi</p>
      {words.map((word, i) => (
        <div key={`id-${i}`}>
          <Box text={word} />
        </div>
      ))}
    </div>
  );
}

export default App;
