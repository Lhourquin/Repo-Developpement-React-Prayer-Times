import React from "react";
import "./pannel.css";
import { Clock} from "./clock.component"
export const Pannel = (props) => {
  
  return (
    <div>
      {props.today.map((obj, index) => (
        <div className="pannel" key={index}>
          <h2>{props.searchField}</h2>
          <p>{setTimeout(Clock, 1000)}</p>
          <p>{obj.data.date.gregorian.date}</p>
          <p>{obj.data.timings.Fajr}</p>
          <p>{obj.data.timings.Sunrise}</p>
          <p>{obj.data.timings.Dhuhr}</p>
          <p>{obj.data.timings.Asr}</p>
          <p>{obj.data.timings.Maghrib}</p>
          <p>{obj.data.timings.Isha}</p>
        </div>
      ))}
    </div>
  );
};
