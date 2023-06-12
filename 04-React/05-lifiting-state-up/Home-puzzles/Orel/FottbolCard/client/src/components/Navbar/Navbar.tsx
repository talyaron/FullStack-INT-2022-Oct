import "./Navbar.scss"

const Navbar = () => {
  return (
    <nav className="container">
      <ul className="navbar">
        <li className="navbar__list">
           <button className="navbar__btn">
            Start Game
           </button>
        </li>
        <li className="navbar__list">
           <button className="navbar__btn">
           End Game
           </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
