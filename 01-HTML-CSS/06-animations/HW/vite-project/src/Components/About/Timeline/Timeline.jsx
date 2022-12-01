import React from 'react';
import { timelineData } from "../../../consts/timelineCards"
import TimelineCard from './TimelineCard/TimelineCard';
import "./Timeline.css"

const Timeline = () => {

return (
        <div>
            <div id='mainTimelineTitle'> My Journey</div>
            <div id='timelineContainer'>
                {timelineData.map((element, index) => (
                    <div id='dotContainer'>
                        {index % 2 === 1 && <TimelineCard
                            key={index}
                            mainTitle={element.title}
                            secondTitle={element.subTitle}
                            dates={element.period}
                        />}
                        <div id="dot"></div>
                        {index % 2 === 0 && <TimelineCard
                            key={index}
                            mainTitle={element.title}
                            secondTitle={element.subTitle}
                            dates={element.period}
                        />}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;