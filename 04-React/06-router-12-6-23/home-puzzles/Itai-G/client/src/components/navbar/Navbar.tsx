import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss"
const Navbar: React.FC = () =>{
    return (
        <nav className="topNav">
        <ul>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </ul>
      </nav>
    );
};

export default Navbar;
