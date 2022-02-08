import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Today.css";
import { TodayTimesList } from "./today-time-list/TodayTimesList";
import { Pannel } from "./pannel-time-today/Pannel";

export const Today = ({ city, country, getAngleOptionValue, method }) => {
  const [today, setToday] = useState([]);
  const [inputCity, setInputCity] = useState("");
  const [lastCity, setLastCity] = useState("");
  const [inputCountry, setInputCountry] = useState("");
 // const [lastCountry, setLastCountry] = useState("");

  useEffect(() => {
      if(city !== "" && country !== ""){
        setInputCity(city);
        setInputCountry(country);
      }else if(city == "" ){
        setLastCity(inputCity);
        //setLastCountry(inputCountry);
      }
  }, [city]);

  useEffect(() => {
    let timer = null;
    if (inputCity && inputCountry && method) {
      let params = new URLSearchParams();

      params.append("country", inputCountry);
      params.append("city", inputCity);
      params.append("method", method);

      let request = {
        params: params,
      };
      timer = setTimeout(async () => {
        const { data } = await axios.get(
          `https://api.aladhan.com/v1/timingsByCity`,
          request
        );
        setToday([data]);
      }, 1000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [inputCity, inputCountry, method]);

  return (
    <div className="Today__div--container-list-pannel">
      {console.log("inputCity : " + inputCity)}
      {console.log("inputCountry : " + inputCountry)}
      {console.log("method : " + method)}
      <TodayTimesList today={today} />
      <Pannel
        today={today}
        searchField={city !== "" ? inputCity : lastCity}
        country={country}
        getAngleOptionValue={getAngleOptionValue}
      />
    </div>
  );
};
