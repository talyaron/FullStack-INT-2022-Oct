import "./nav.scss";
import { FC  } from "react";


const Nav:FC= ()=>{
    return(
        <div>
        <div className="nav">
      <div className="navBar">
        <div className="instagram-logo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png" alt="" />
        </div>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </div>
    </div>
        </div>
    )
}

export default Nav