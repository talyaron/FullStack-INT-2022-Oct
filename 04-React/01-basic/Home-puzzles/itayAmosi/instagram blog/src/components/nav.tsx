import "./nav.scss";
import { FC } from "react";

interface Nav {
  svg: string;
}

const Nav: FC<Nav> = ({ svg }) => {
  return (
    <div className="topNav">
      <button className="topNav__btn">TopBtn</button>
      <button className="topNav__btn">TopBtn</button>
      <button className="topNav__btn">TopBtn</button>
    </div>
  );
};

export default Nav;
