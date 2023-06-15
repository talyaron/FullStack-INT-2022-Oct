
import 'animate.css';
import './navbar.scss'
import { Link } from 'react-router-dom';




const Navbar = () => {

        return (
                <header className='header  w-full'>
                        <nav className='p-5 w-full' >
                                <ul className='flex justify-center w-full space-x-6 align-middle items-center '>
                                        <li className='hover:text-main-color '>
                                                <Link to="#">Home</Link>
                                        </li>
                                        <li className='hover:text-main-color '>
                                                <Link to="#">Services</Link>
                                        </li>
                                        <li className='hover:text-main-color '>
                                                <Link to="#">About</Link>
                                        </li>
                                        <li className='hover:text-main-color '>
                                                <Link to="#">Contact</Link>
                                        </li>
                                </ul>
                        </nav>
                </header>
        )
}

export default Navbar
