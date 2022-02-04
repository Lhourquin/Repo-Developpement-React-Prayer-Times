import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Today.css";
import { TodayTimesList } from "./today-time-list/TodayTimesList";
import { Pannel } from "./pannel-time-today/Pannel";

export const Today = ({ city, country, getAngleOptionValue, method }) => {
  const [today, setToday] = useState([]);
  const [inputCity, setInputCity] = useState("");
 // const [methodDegree, setMethodDegree] = useState(method);

  setTimeout(() => {
    setInputCity(city);
  }, 1000);

  useEffect(() => {
    let timer = null;
    if (city || country || method) {
      let params = new URLSearchParams();

      params.append("country", country);
      params.append("city", city);
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
  }, [city, country, method]);

  return (
    <div className="Today__div--container-list-pannel">
      {console.log(method)}

      <TodayTimesList today={today} />
      <Pannel
        today={today}
        searchField={inputCity}
        country={country}
       // methodDegree={methodDegree}
        getAngleOptionValue={getAngleOptionValue}
      />
    </div>
  );
};
