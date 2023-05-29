import { FC, useState } from "react";
import "./box.css";
interface BoxProps {
  text: string;
}

const Box: FC<BoxProps> = ({ text }) => {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter((counter) => counter + 1);
  }
  return (
    <div className="box" onClick={handleClick}>
      {text}: {counter}
    </div>
  );
};

export default Box;
