
import {useState} from 'react';


const TestButton = () =>{
    const [counter , setCounter] = useState([])
    return(
        <button onClick={()=>{setCounter(["banana"])}}>
            Click Me {counter}
        </button>
    )
}

export default TestButton
