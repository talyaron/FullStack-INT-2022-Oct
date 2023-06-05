import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  const [isTrue,setIsTrue] = useState(false)
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/get-word");
     
      const {ok} = data;
      console.log(ok)
      if(ok){
        setIsTrue(ok)
      }
    })();
  }, []);

  return (
    <div>
      <h1>Hello: {isTrue?"Hi all":"good?"}</h1>
    </div>
  );
}

export default App;
