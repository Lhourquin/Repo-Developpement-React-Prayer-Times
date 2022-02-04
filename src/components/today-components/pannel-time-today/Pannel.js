import React, {useEffect, useState} from "react";
import axios from "axios";
import DateNow from "./DateNow";
import "./Pannel.css";
export const Pannel = ({ today, searchField, country, getAngleOptionValue }) => {

  const [optionAngleValue, setOptionAngleValue] = useState("");
  const [countryValue, setCountryValue] = useState("");
  const [newTodayAngle, setNewTodayAngleValue] = useState([])

/*
  const getAngleMethod = () => {
    let timer = null;
    if (searchField || country) {
      let params = new URLSearchParams();
      params.append("country", country);
      params.append("city", searchField);
      params.append("method", optionAngleValue);

      let request = {
        params: params,
      };
      timer = setTimeout(async () => {
        const { data } = await axios.get(
          `https://api.aladhan.com/v1/timingsByCity`,
          request
        );
        setNewTodayAngleValue([data]);
      }, 1000);
    }
    return () => {
      clearTimeout(timer);
    };
  }
/*
  const getAngleOptionValue = (e) => {
    setOptionAngleValue(e.target.value)
  }*/
 
  return (
    <>
      {today.map((obj, index) => (
        <div className="Pannel__div--container-times-today" key={index}>
          <h2>
            {searchField.charAt(0).toUpperCase() + searchField.slice(1).toLowerCase()}
            <span style={{ fontSize: "10px" }}>
              Angle : {obj.data.meta.method.id == 2 ? "15°" : ""}
            </span>
            <select>
                              <option onClick={getAngleOptionValue} value="2">15°</option>
              <option onClick={getAngleOptionValue} value="3">Muslim World League</option>
              <option onClick={getAngleOptionValue} value="4">Umm Al-Qura University, Makkah</option>
              


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
