/* eslint-disable @typescript-eslint/no-empty-function */
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

interface Flower {
    img: string;
    name: string;
}

function App() {
    // const [count, setCount] = useState(0);
    const [isTrue, setIsTrue] = useState(false);
    const [flowers, setFlowers] = useState<Flower[]>([]);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get("/api/get-word");
            const { ok, flowers } = data;
            console.log(ok);
            console.log(flowers.length)

            if (ok && flowers.length > 0) {
              setIsTrue(ok);
              setFlowers(flowers);
            }
        })();
    }, []);

    return (
        <div>
            <h1>Flowers</h1>
            <div>
                {isTrue?flowers.map((flower, i) => 
                    <><h1 key={i}>{flower.name}</h1 ><img key={i+1} src={flower.img}></img></>
                ):<h1>No Flowers :(</h1>}
            </div>
        </div>
    );
}

export default App;
