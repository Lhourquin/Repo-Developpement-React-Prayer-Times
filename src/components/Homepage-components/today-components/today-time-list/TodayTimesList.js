import React, {useState} from "react";
import "./TodayTimesList.css";
import {CalculMidnight} from "./calcul-midnigh-today/CalculMidnightToday";

export const TodayTimesList = ({ today }) => {

  const [displayHadith, setDisplayHadith] = useState(false);

  const toggleDisplay = () => {
    setDisplayHadith((boolean)=> !boolean);
  }
  console.log(displayHadith);
  return (
    <>
    {displayHadith === true ? <div style={{ background : "black", width : "100%", height : "139vh", opacity : "0.8", position : "absolute"}}>Test</div> : ""}
      {today.map((obj, index) => (
        <ul className="TodayTimesList__ul-times-list" key={index}>
          <li className="TodayTimesList__ul-times-list__li">
            <span>
              FAJR {obj.data.timings.Fajr} - SHOUROUQ {obj.data.timings.Sunrise}{" "}
            </span>
            <span className="TodayTimesList__ul-times-list__li__span--information">
              {" "}
              <i 
              className="fas fa-info-circle info-icons"
              onClick={toggleDisplay}></i>
               </span>
          </li>
          <li className="TodayTimesList__ul-times-list__li">
            <span>DHOHR {obj.data.timings.Dhuhr} </span>{" "}
            <span className="TodayTimesList__ul-times-list__li__span--information">
              {" "}
              <i 
              className="fas fa-info-circle info-icons"
              onClick={toggleDisplay}></i>
            </span>{" "}
          </li>
          <li className="TodayTimesList__ul-times-list__li">
            <span>ASR {obj.data.timings.Asr} - PALEUR DU SOLEIL 16:45 </span>
            <span className="TodayTimesList__ul-times-list__li__span--information">
              {" "}
              <i 
              className="fas fa-info-circle info-icons"
              onClick={toggleDisplay}></i>
            </span>{" "}
          </li>
          <li className="TodayTimesList__ul-times-list__li">
            <span>MAGHREB {obj.data.timings.Maghrib} </span>{" "}
            <span className="TodayTimesList__ul-times-list__li__span--information">
              {" "}
              <i 
              className="fas fa-info-circle info-icons"
              onClick={toggleDisplay}></i>
            </span>{" "}
          </li>
          <li className="TodayTimesList__ul-times-list__li">
            <span>
              ICHA {obj.data.timings.Isha} - MINUIT <CalculMidnight todayMidnight={today} />{" "}
            </span>{" "}
            <span className="TodayTimesList__ul-times-list__li__span--information">
              {" "}
              <i 
              className="fas fa-info-circle info-icons"
              onClick={toggleDisplay}></i>
            </span>{" "}
          </li>
          <li className="TodayTimesList__ul-times-list__li">
            <span>QIYAMM AL LAYL 03:45</span>
            <span className="TodayTimesList__ul-times-list__li__span--information">
              {" "}
              <i 
              className="fas fa-info-circle info-icons"
              onClick={toggleDisplay}></i>
            </span>{" "}
          </li>
        </ul>
      ))}
      {}
    </>
  );
};
