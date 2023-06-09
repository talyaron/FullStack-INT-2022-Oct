import './Navbar.scss'

const Navbar = () => {
  return (
    <nav className='navbar-container'>
        <ul className='navbar-container__nav'>
            <li className='navbar-container__list'>
                <button className='navbar-container__btn'>
                    Start Game
                </button>
            </li>
            <li className='navbar-container__list'>
                <button className='navbar-container__btn'>
                    Reset Game
                </button>
            </li>
            <li className='navbar-container__list'>
                <button className='navbar-container__btn'>
                    Reset Score
                </button>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
