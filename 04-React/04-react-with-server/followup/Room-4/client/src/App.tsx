import { useEffect, useState } from "react";
import axios from "axios";
import "./App.scss";

interface Dogs {
  img: string;
  name: string;
}

function App() {
  // const [count, setCount] = useState(0);
  const [_dogs, setDogs] = useState<Dogs[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/get-dogs");

      const { dogs } = data;
      setDogs(dogs);
    })();
  }, []);

  return (
    <div>
      {_dogs.map((dog, i) => (
        <div className="div">

          <h1 key={i}>{dog.name}</h1>
          <img src={dog.img} key={i} />

        </div>
        
      ))}
      {/* {_dogs.map((dog, i) => (
      ))} */}
    </div>
  );
}

export default App;
