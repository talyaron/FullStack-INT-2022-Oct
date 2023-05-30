import "./nav.scss";
import { FC } from "react";

interface Nav {
  svg: string;
}

const Nav: FC<Nav> = ({ svg }) => {
  return (
<div className="topNav">
  hi:{ svg }
</div>
  ); 


}

export default Nav;
