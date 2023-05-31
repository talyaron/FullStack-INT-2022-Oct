import { FC } from "react";
import "../style/navRight.scss";

interface NavRight {
  name: string;
}

const navRight: FC<NavRight> = ({ name }) => {
  return (
    <div className="navRight">
      <button className="navRight__btn" onClick={() => console.log("clicked")}>
        {name}
      </button>
    </div>
  );
};

export default navRight;
