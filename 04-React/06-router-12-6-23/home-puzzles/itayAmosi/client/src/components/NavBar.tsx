import { Link } from 'react-router-dom'
import "../style/navBar.scss"

const NavBar = () => {
  return (
    <div>
<nav className="primary-nav">
  <ul role="list">
    <li className="nav-link"><Link to="/">Home</Link></li>
    <li className="nav-link"><Link to="/about">About</Link></li>
    <li className="nav-link"><Link to="/login">Login</Link></li>
    <li className="nav-link"><Link to="/register">Register</Link></li>
    <li className="nav-link"><Link to="/admin">Admin</Link></li>
    <li className="nav-link"><Link to="/projects">Projects</Link></li>

  </ul>
</nav>
    </div>
  )
}

export default NavBar
