import React from "react";

import "./timetable.css";


const TimeRow = ({ timeRow, className, now }) => {
    let timeLine;
    if (className === "timetable__row timetable__row--active") {
        const duration = timeRow.endTime - timeRow.startTime;
        const passedTime = -(timeRow.startTime - now);
        const lineProgress = Math.abs((passedTime / duration) * 100);
        
        timeLine = (
            <div className="timetable__line-container">
                <div className="timetable__line" style={{width: `${lineProgress}%`}} />
            </div>
        );
    } else {
        timeLine = null;
    }
    
    return (
        <div className={className}>
            <div className="timetable__cell timetable__cell--time">{timeRow.time}</div>
            <div className="timetable__cell timetable__cell--title">
                <span className="timetable__link">{timeRow.title}</span>
                {timeLine}
            </div>
        </div>
    )
};

const getCurrentTelecastIndex = (timetable) => {
    const now = new Date().getTime();
    const maxTimeInMilliseconds = 80000000;
    let min = maxTimeInMilliseconds;
    let currentTelecastIndex = 0;
    
    for (let i = 0; i < timetable.length; i++) {
        const timeLeft = timetable[i].startTime - now;
        if (timeLeft > 0 && timeLeft < min) {
            min = timeLeft;
            currentTelecastIndex = i - 1;
            if (currentTelecastIndex === -1) {
                currentTelecastIndex = timetable.length - 1;
            }
        }
        if (timeLeft < -maxTimeInMilliseconds) {
            min = -maxTimeInMilliseconds - 1;
            currentTelecastIndex = i - 1;
            break
        }
    }
    
    return currentTelecastIndex;
};


const Timetable = ({ timetable }) => {
    const now = new Date().getTime();
    const currentTelecastIndex = getCurrentTelecastIndex(timetable);
    const rowsToShow = 4;
    const remainingTelecastArr = timetable.slice(currentTelecastIndex, currentTelecastIndex + rowsToShow);


    return (
        <div className="channels__timetable timetable">
            {
                remainingTelecastArr.map((timeRow, ind) => {
                    let className;
                    ind === 0 ? className = "timetable__row timetable__row--active" : className = "timetable__row";
                    return <TimeRow key={ind}
                                    timeRow={timeRow}
                                    className={className}
                                    now={now} />
                })
            }
        </div>
    )
};


export default Timetable;