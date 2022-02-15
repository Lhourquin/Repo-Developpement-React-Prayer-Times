import React, { useState, useEffect } from "react";
import { Clock } from "./time-components/Clock";
import { Timer } from "./time-components/Timer";
//import { CurrentTimes } from "./current-times-components/CurrentTimes";
//import { CountDown } from "./countdown-component/CountDown";
import "./Pannel.css";
export const Pannel = ({ today, searchField, getAngleOptionValue, method }) => {
  // console.log(today);

  // console.log(curentTime)
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
                <select
                  onChange={getAngleOptionValue}
                  className="select-degree"
                >
                  <option value={method[0].methodTwo.value}>{method[0].methodTwo.stringValue}</option>
                  <option value={method[1].methodFifteen.value}>{method[1].methodFifteen.stringValue}</option>
                  <option value="3">Ligue Mondiale Musulmane</option>
                  <option value="4">Umm Al-Qura, Makkah</option>
                  <option value="5">Egypte</option>
                  <option value="8">Golf</option>
                  <option value="9">Koweit</option>
                  <option value="10">Qatar</option>
                  <option value="11">Singapour</option>
                  <option value="12">
                    Union des Organisations islamiques de France
                  </option>
                  <option value="13">Turquie</option>
                </select>
              </div>
            </div>
          </div>
          <ul className="Pannel__ul--hour-date-countdown">
            {/*  <CountDown
                year={obj.data.date.gregorian.year}
                day={obj.data.date.gregorian.day}
                month={obj.data.date.gregorian.month.en}
                nextTimes={[
                  { fajr: obj.data.timings.Fajr },
                  { shourouq: obj.data.timings.Sunrise },
                  { dhohr: obj.data.timings.Dhuhr },
                  { asr: obj.data.timings.Asr },
                  { maghreb: obj.data.timings.Maghrib },
                  { icha: obj.data.timings.Isha },
                ]}
              />*/}
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
