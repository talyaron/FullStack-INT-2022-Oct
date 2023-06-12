import { Link } from 'react-router-dom'
import "../style/navBar.scss"

const NavBar = () => {
  return (
    <div>
<nav className="primary-nav">
  <ul role="list">
    <li className="nav-link"><Link to="/">Home</Link></li>
    <li className="nav-link"><Link to="/about">About</Link></li>
    <li className="nav-link"><Link to="/form">Form</Link></li>
    <li className="nav-link"><Link to="/">Contact</Link></li>

  </ul>
</nav>
    </div>
  )
}

export default NavBar
