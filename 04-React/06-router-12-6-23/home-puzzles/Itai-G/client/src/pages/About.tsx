import React from 'react';
import { Link } from 'react-router-dom';


const About: React.FC = () =>{
    return(
        <div>
            <h1>Hi my name is Itai Gelberg and i am a fullStack dev starting his first protfolio site!</h1>
            <Link to='/'>GO to main page</Link>
        </div>
    )
}

export default About;
