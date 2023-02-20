import React from 'react';
import './dist/center.css'
import Home from './Home/Home';
import Activities from './Activities/Activities';

const Center = () => {
    return (
        <div  className='centerContainer'>
           <Home/>
           <Activities/>
        </div>
    );
};

export default Center;