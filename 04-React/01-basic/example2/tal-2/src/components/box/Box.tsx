/* eslint-disable no-inner-declarations */
import { FC, useState } from "react";
import "./box.css";

interface BoxProps {
  text: string;
}

const Box: FC<BoxProps> = ({ text }) => {
  try {
    const [counter, setCounter] = useState<number>(42);

    function handleClick() {
      setCounter((counter) => counter + 1);
    }

    return (
      <div className="box" onClick={handleClick}>
        {text}: {counter}
        <button>OK</button>
        <img src="dgdfg" />
      </div>
    );
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default Box;
