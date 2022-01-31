import React from "react";
import "./TodayTimesList.css";
export const TodayTimesList = (props) => {
  //console.log(props.map(x=> x.data.data.timings.Fajr))
  return (
    <>
      {props.today.map((obj, index) => (
        <ul className="TodayTimesList__ul-times-list" key={index}>
          <li className="TodayTimesList__ul-times-list__li">
            <span>
              {obj.data.date.gregorian.date} <span> i</span>
            </span>{" "}
          </li>
          <li className="TodayTimesList__ul-times-list__li">
            <span>
              {obj.data.timings.Fajr} - {obj.data.timings.Sunrise}{" "}
              <span> i</span>
            </span>{" "}
          </li>
          <li className="TodayTimesList__ul-times-list__li">
            <span>
              {obj.data.timings.Dhuhr} <span> i</span>
            </span>{" "}
          </li>
          <li className="TodayTimesList__ul-times-list__li">
            <span>
              {obj.data.timings.Asr} <span> i</span>
            </span>{" "}
          </li>
          <li className="TodayTimesList__ul-times-list__li">
            <span>
              {obj.data.timings.Maghrib} <span> i</span>
            </span>{" "}
          </li>
          <li className="TodayTimesList__ul-times-list__li">
            <span>
              {obj.data.timings.Isha} <span> i</span>
            </span>{" "}
          </li>
        </ul>
      ))}
    </>
  );
};
