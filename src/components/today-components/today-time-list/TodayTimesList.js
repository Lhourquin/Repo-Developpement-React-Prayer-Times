import React from "react";
import "./TodayTimesList.css";
export const TodayTimesList = ({ today }) => {
  //console.log(props.map(x=> x.data.data.timings.Fajr))
  return (
    <>
      {today.map((obj, index) => (
        <ul className="TodayTimesList__ul-times-list" key={index}>
          <li className="TodayTimesList__ul-times-list__li">
            <span>{obj.data.date.gregorian.date} </span>
            <span className="TodayTimesList__ul-times-list__li__span--information">
              {" "}
              i
            </span>{" "}
          </li>
          <li className="TodayTimesList__ul-times-list__li">
            <span>
             FAJR {obj.data.timings.Fajr} - SHOUROUQ {obj.data.timings.Sunrise}{" "}
            </span>
            <span className="TodayTimesList__ul-times-list__li__span--information">
              {" "}
              i
            </span>{" "}
          </li>
          <li className="TodayTimesList__ul-times-list__li">
            <span>DHOHR {obj.data.timings.Dhuhr} </span>{" "}
            <span className="TodayTimesList__ul-times-list__li__span--information">
              {" "}
              i
            </span>{" "}
          </li>
          <li className="TodayTimesList__ul-times-list__li">
            <span>ASR {obj.data.timings.Asr} - PALEUR DU SOLEIL 16:45 </span>
            <span className="TodayTimesList__ul-times-list__li__span--information">
              {" "}
              i
            </span>{" "}
          </li>
          <li className="TodayTimesList__ul-times-list__li">
            <span>MAGHREB {obj.data.timings.Maghrib} </span>{" "}
            <span className="TodayTimesList__ul-times-list__li__span--information">
              {" "}
              i
            </span>{" "}
          </li>
          <li className="TodayTimesList__ul-times-list__li">
            <span>ICHA {obj.data.timings.Isha} - MINUIT 00:45 </span>{" "}
            <span className="TodayTimesList__ul-times-list__li__span--information">
              {" "}
              i
            </span>{" "}
          </li>
        </ul>
      ))}
    </>
  );
};
