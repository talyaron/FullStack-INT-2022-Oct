// import { Link } from 'react-router-dom'
import { Link } from "react-router-dom";
import "./Style.scss"

const NavBar = () => {
  return (
    <div>
   <nav className="navbar">

<div className="left">

    <h1>Navbar</h1>

</div>

<div className="right">

<input type="checkbox" id="check"></input>

    <label htmlFor="check" className="checkBtn">

        <i className="fa fa-bars"></i>

    </label>

    <ul className="list">

    <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <Link to="/about">About Me</Link>
      </li>
      <li>
        <Link to="/form">Form</Link>
      </li>

    </ul>

        </div>

        </nav>
         </div>
  )
};

export default NavBar
