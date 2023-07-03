import { useEffect, useState } from "react";
import NeymarInjured from "./components/NeymarInjured";
import NeymarCelebrating from "./components/NeymarCelebrating";
import LolSound from "./sounds/very-infectious-laughter-117727.mp3";
import OuchSound from "./sounds/ouch-43811.mp3";

function App() {
  const [clicked, setClicked] = useState(false);

  const play = async (audio: string) => {
    await new Audio(audio).play();
  };

  useEffect(() => {
    clicked ? play(OuchSound) : play(LolSound);
  }, [clicked]);

  return (
    <>
      {clicked ? (
        <NeymarInjured setClicked={setClicked} />
      ) : (
        <NeymarCelebrating setClicked={setClicked} />
      )}
    </>
  );
}

export default App;
