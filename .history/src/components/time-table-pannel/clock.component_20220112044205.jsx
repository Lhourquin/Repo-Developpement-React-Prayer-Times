import React from "react";

export const Clock = () =>{
    
        const curentTime = new Date();
        const timeHourMinutesAndSecond = curentTime.toLocaleTimeString();
        
        return (
            <span>{timeHourMinutesAndSecond}</span>
        )
    
}