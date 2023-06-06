import { useEffect, useState } from "react";
import Balloon from "./components/Balloon";
import axios from "axios";

interface Ballon {
  color: string;
  radius: string;
  _id: string;
}

function App() {
  const [ballons, setBallons] = useState<Ballon[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:3000/api/v1/ballons"
        );
        setBallons(data.ballons);
        if(ballons.length === 0) {
          
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  return (
    <>
      {ballons.map((ballon) => (
        <Balloon
          key={ballon._id}
          color={ballon.color}
          radius={parseInt(ballon.radius)}
          id={ballon._id}
        />
      ))}
    </>
  );
}

export default App;
