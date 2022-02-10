import React from "react";
import DateNow from "./DateNow";
import "./Pannel.css";
export const Pannel = ({ today, searchField, getAngleOptionValue }) => {
  return (
    <>
      {today.map((obj, index) => (
        <div className="Pannel__div--container-times-today" key={index}>
          <div className="Pannel__div--container-times-today__div--title-container-angle-select">
            <h2 className="Pannel__div--container-times-today__div--title__h2">
              {searchField.charAt(0).toUpperCase() +
                searchField.slice(1).toLowerCase()}
            </h2>
            <div className="Pannel__div--container-times-today__div__div--container-angle-select">
              <div className="Pannel__div--container-times-today__div__div--container-angle-select__div--span-select">
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
          </div>
          <ul className="Pannel__ul--hour-date-countdown">
            <li className="Pannel__ul--hour-date-countdown__li--countdown-current-times">
              FAJR {obj.data.timings.Fajr} + 01:00:03
            </li>
            <li className="Pannel__ul--hour-date-countdown__li--countdown-next-times">
              SHOUROUQ - 00:14:57
            </li>
            <DateNow className="DateNow" />

            <li className="Pannel__ul--hour-date-countdown__li--date">
              {new Date(Date.now()).toLocaleString(undefined, {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "2-digit",
              })}
            </li>
            <li className="Pannel__ul--hour-date-countdown__li--date">
              {obj.data.date.hijri.day +
                " " +
                obj.data.date.hijri.month.en +
                " " +
                obj.data.date.hijri.weekday.en +
                " " +
                obj.data.date.hijri.year}
            </li>
          </ul>
        </div>
      ))}
    </>
  );
};