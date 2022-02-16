import React from "react";
import { Clock } from "./time-components/Clock";
import { Timer } from "./time-components/Timer";
import "./Pannel.css";
export const Pannel = ({ today, searchField, getAngleOptionValue, method }) => {
  return (
    <>
      {today.map((obj, index) => (
        <div className="Pannel__div--container-times-today" key={index}>
          <div className="Pannel__div--container-times-today__div--title-container-angle-select">
            <h2 className="Pannel__div--container-times-today__div--title__h2">
              <i className="fas fa-map-marker-alt localisation-marker-pannel"></i>{" "}
              {searchField.charAt(0).toUpperCase() +
                searchField.slice(1).toLowerCase()}
            </h2>
            <div className="Pannel__container-select-degree">
              <select onChange={getAngleOptionValue} className="select-degree">
                {method.map((obj, index) => (
                  <option key={index} value={obj.value}>
                    {obj.stringValue}{" "}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <ul className="Pannel__ul--hour-date-countdown">
            <Timer
              year={obj.data.date.gregorian.year}
              day={obj.data.date.gregorian.day}
              month={obj.data.date.gregorian.month.en}
              arrayOfTimesSalatOfTheDay={[
                { fajr: obj.data.timings.Fajr },
                { shourouq: obj.data.timings.Sunrise },
                { dhohr: obj.data.timings.Dhuhr },
                { asr: obj.data.timings.Asr },
                { maghreb: obj.data.timings.Maghrib },
                { icha: obj.data.timings.Isha },
                { midnight: "" },
              ]}
            />
            <Clock className="DateNow" />

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
