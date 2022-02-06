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
              {obj.data.timings.Fajr} - {obj.data.timings.Sunrise}{" "}
            </span>
            <span className="TodayTimesList__ul-times-list__li__span--information">
              {" "}
              i
            </span>{" "}
          </li>
          <li className="TodayTimesList__ul-times-list__li">
            <span>{obj.data.timings.Dhuhr} </span>{" "}
            <span className="TodayTimesList__ul-times-list__li__span--information">
              {" "}
              i
            </span>{" "}
          </li>
          <li className="TodayTimesList__ul-times-list__li">
            <span>{obj.data.timings.Asr} </span>
            <span className="TodayTimesList__ul-times-list__li__span--information">
              {" "}
              i
            </span>{" "}
          </li>
          <li className="TodayTimesList__ul-times-list__li">
            <span>{obj.data.timings.Maghrib} </span>{" "}
            <span className="TodayTimesList__ul-times-list__li__span--information">
              {" "}
              i
            </span>{" "}
          </li>
          <li className="TodayTimesList__ul-times-list__li">
            <span>{obj.data.timings.Isha} </span>{" "}
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
