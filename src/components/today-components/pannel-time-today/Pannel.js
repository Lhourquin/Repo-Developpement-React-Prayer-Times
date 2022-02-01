import React from "react";
import DateNow from "./DateNow";
import "./Pannel.css";
export const Pannel = ({ today, searchField }) => {
  return (
    <>
      {/*setTimeout(() => {console.log(today)}, 5000)*/}
      {today.map((obj, index) => (
        <div className="Pannel__div--container-times-today" key={index}>
          <h2>
            {searchField.charAt(0).toUpperCase() + searchField.slice(1).toLowerCase()}
            <span style={{ fontSize: "10px" }}>
              Angle : {obj.data.meta.method.id == 2 ? "15°" : ""}
            </span>
          </h2>
          <DateNow />
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
