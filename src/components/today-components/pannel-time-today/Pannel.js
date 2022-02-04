import React from "react";
import DateNow from "./DateNow";
import "./Pannel.css";
export const Pannel = ({ today, searchField, getAngleOptionValue }) => {
  return (
    <>
      {today.map((obj, index) => (
        <div className="Pannel__div--container-times-today" key={index}>
          <div>
            <h2>
              {searchField.charAt(0).toUpperCase() +
                searchField.slice(1).toLowerCase()}
            </h2>
            <div className="Pannel__div--container-times-today__div--container-angle-select">
              <span style={{ fontSize: "10px" }}>
                Angle : {obj.data.meta.method.id == 2 ? "15°" : ""}
              </span>
              <select className="select-degree">
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
            </div>
          </div>
          {console.log(today)}
          <ul>
            <li>
              {new Date(Date.now()).toLocaleString(undefined, {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "2-digit",
              })}
            </li>
            <li>
              {obj.data.date.hijri.day +
                " " +
                obj.data.date.hijri.month.en +
                " " +
                obj.data.date.hijri.weekday.en +
                " " +
                obj.data.date.hijri.year}
            </li>
            <DateNow className="DateNow" />

            <li>FAJR + 01:00:03</li>
            <li>SHOUROUQ - 00:14:57</li>
          </ul>
          {/* <p>{obj.data.timings.Fajr}</p>
          <p>{obj.data.timings.Sunrise}</p>
          <p>{obj.data.timings.Dhuhr}</p>
          <p>{obj.data.timings.Asr}</p>
          <p>{obj.data.timings.Maghrib}</p>
          <p>{obj.data.timings.Isha}</p>*/}
        </div>
      ))}
    </>
  );
};
