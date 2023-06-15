import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink className="navLink" to="/">
        Home
      </NavLink>
      <NavLink className="navLink" to="/projects">
        Projects
      </NavLink>
      <NavLink className="navLink" to="/contact">
        Contact
      </NavLink>
    </nav>
  );
};

export default Navbar;
