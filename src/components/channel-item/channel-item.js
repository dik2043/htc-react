import React from "react";

import Timetable from "../timetable";


const ChannelItem = ({ channel }) => {
    
    return (
        <li className="channels__item">
            <div className="channels__logo-container">
                <img className="channels__logo" src={channel.icon} alt="channel" />
            </div>
            <div className="channels__info">
                <h4 className="channels__title">{channel.name}</h4>
                <Timetable timetable={channel.timetable} />
            </div>
        </li>
    
    )
};

export default ChannelItem;