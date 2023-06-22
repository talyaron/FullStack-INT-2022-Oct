import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const fl = ["a", "b"];

export interface Flower{
  img:string;
  name:string;
}

function App() {
  // const [count, setCount] = useState(0);
  const [isTrue, setIsTrue] = useState(false);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/get-word");

      const { ok } = data;
      console.log(ok);
      if (ok) {
        setIsTrue(ok);
      }
    })();
  }, []);

  return (
    <div>
      {fl.map((f, i) => (
        <div key={i}>{f}</div>
      ))}
      <h1>Hello: {isTrue ? "Hi all" : "good?"}</h1>
    </div>
  );
}

export default App;
