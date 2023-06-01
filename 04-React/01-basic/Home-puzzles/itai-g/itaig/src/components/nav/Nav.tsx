import React from 'react';
import './nav.scss'


const Nav: React.FC = () => {
    return(
        <nav className='topnav'>
            <ul>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Help</a>
            </ul>
        </nav>
    )
}

export default Nav;