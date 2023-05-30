import React from 'react';
import './nav.scss'


const Nav: React.FC = () => {
    return(
        <nav className='topnav'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Help</li>
            </ul>
        </nav>
    )
}

export default Nav;