import { FC  } from "react";
import "./img.css";
interface BoxProps {
  text: string;
}

const Box: FC<BoxProps> = ({ text }) => {
  return (
    <div className="box" >
      <img src={text} alt="" />
    </div>
  );
};

export default Box;