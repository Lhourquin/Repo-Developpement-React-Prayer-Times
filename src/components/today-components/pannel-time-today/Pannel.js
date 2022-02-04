import React from "react";
import DateNow from "./DateNow";
import "./Pannel.css";
export const Pannel = ({ today, searchField, getAngleOptionValue }) => {
  return (
    <>
      {today.map((obj, index) => (
        <div className="Pannel__div--container-times-today" key={index}>
          <h2>
            {searchField.charAt(0).toUpperCase() +
              searchField.slice(1).toLowerCase()}
            <span style={{ fontSize: "10px" }}>
              Angle : {obj.data.meta.method.id == 2 ? "15°" : ""}
            </span>
            <select>
              <option onClick={getAngleOptionValue} value="2">
                15°
              </option>
              <option onClick={getAngleOptionValue} value="3">
                Muslim World League
              </option>
              <option onClick={getAngleOptionValue} value="4">
                Umm Al-Qura University, Makkah
              </option>
            </select>
            {console.log(today)}
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
