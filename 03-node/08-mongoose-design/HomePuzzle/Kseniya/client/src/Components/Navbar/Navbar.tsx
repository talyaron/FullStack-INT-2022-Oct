import{ FC } from "react";
import { NAVBAR_HEADLINES } from "./NavbarData";
import { useHistory } from "react-router-dom";
import './Navbar.css'

const Navbar: FC = () => {
    const history = useHistory()
  return <div className="navbarElements">
    {NAVBAR_HEADLINES.map((element, index) => (
        <div key={index} className="navbarElement" onClick={() => { history.push(element.route)}}>{element.label}</div>
      ))}
  </div>;
};

export default Navbar;
