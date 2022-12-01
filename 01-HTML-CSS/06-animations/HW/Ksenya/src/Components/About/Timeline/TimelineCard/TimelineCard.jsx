import React from 'react';
import "./TimelineCard.css"


const TimelineCard = ({ mainTitle, secondTitle, dates }) => {
    return (
        <div className='cardContainer'>
            <div id='timelineCardContainer'>
                <div id='timelineTitle'>{mainTitle}</div>
                <div id='timelineSub'>{secondTitle}</div>
                <div id='timelinePeriod'>Session: {dates}</div>
            </div>
        </div>
    );
};

export default TimelineCard;