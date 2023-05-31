import "./nav.scss";
import { FC  } from "react";


const Nav:FC= ()=>{
    return(
        <div>
        <div className="nav">
      <ul>
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
      </ul>
    </div>
        </div>
    )
}

export default Nav