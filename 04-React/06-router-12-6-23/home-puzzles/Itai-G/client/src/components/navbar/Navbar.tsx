import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss"
const Navbar: React.FC = () =>{
    return (
        <nav className="topNav">
        <ul>
          <a>
            <Link to="/">Home</Link>
          </a>
          <a>
            <Link to="/projects">Projects</Link>
          </a>
          <a>
            <Link to="/about">About</Link>
          </a>
          <a>
            <Link to="/contact">Contact</Link>
          </a>
        </ul>
      </nav>
    );
};

export default Navbar;
