import React from 'react';
import "./GenericIntro.css"

const GenericIntro = ({smallTitle, mainTitle, desc}) => {
    return (
        <div id='introContainer'>
            <div id='smallTitle'>{smallTitle}</div>
            <div id='mainTitle'>{mainTitle}</div>
            <p id='description'>{desc}</p>
        </div>
    );
};

export default GenericIntro;