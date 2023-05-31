import "./dist/boxStyle.css";
import { FC, useState } from "react";

interface Box {
  text: string;
}

const Box: FC<Box> = ({ text }) => {
  const [counter, setCounter] = useState(0);
  function handleClick() {
    setCounter((counter) => counter + 1);
  }
  return <button className="box" onClick={handleClick}>{text}: {counter}</button>;
};

export default Box;
