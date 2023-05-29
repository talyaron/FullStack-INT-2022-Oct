import { FC } from "react";
import "./box.scss";
interface BoxProps {
  text: string;
}

const Box:FC<BoxProps> = ({text}) => {
    return (
        <div className="box">
          {text}
        </div>
      );
    };
    
    export default Box;
    