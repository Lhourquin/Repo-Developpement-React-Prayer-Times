import React from "react";
import DateNow from "./DateNow";
import "./Pannel.css";
export const Pannel = (props) => {
  
  return (
    <>
      {props.today.map((obj, index) => (
        <div className="Pannel__div--container-times-today" key={index}>
          <h2>{props.searchField}</h2>
          <DateNow/>
          <p>{obj.data.date.gregorian.date}</p>
          <p>{obj.data.timings.Fajr}</p>
          <p>{obj.data.timings.Sunrise}</p>
          <p>{obj.data.timings.Dhuhr}</p>
          <p>{obj.data.timings.Asr}</p>
          <p>{obj.data.timings.Maghrib}</p>
          <p>{obj.data.timings.Isha}</p>
        </div>
      ))}
    </>
  );
};
