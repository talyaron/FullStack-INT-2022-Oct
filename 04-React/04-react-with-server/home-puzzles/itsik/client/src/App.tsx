import axios from 'axios';
import './App.css'
import { useEffect ,useState } from 'react';


export interface Ballons{
   src:string;
}

function App() {
  try {
    const [isTrue, setIsTrue] = useState(false);
    const [ballon, setBallon] = useState<Ballons[]>([]);
    console.log(ballon)
   
    useEffect(() => {
      (async () => {
        const { data } = await axios.get("/api/ballons");
  
        const { ok, ballon } = data;
        console.log(ok);
        console.log(ballon.length)

        if (ok && ballon.length > 0) {
          setIsTrue(ok);
          setBallon(ballon)
        }
      })();
    }, []);



    return (
      <div>
        
      </div>
    )
  } catch (error) {
    console.error(error)
  }
 
 
}

export default App
