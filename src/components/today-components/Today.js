import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Today.css";
import { TodayTimesList } from "./today-time-list/TodayTimesList";
import { Pannel } from "./pannel-time-today/Pannel";

export const Today = ({ city, country }) => {
  const [today, setToday] = useState([]);
  const [inputCity, setInputCity] = useState("");

  setTimeout(() => {
    setInputCity(city);
  }, 1000);

  useEffect(() => {
    let timer = null;
    if (city || country) {
      let params = new URLSearchParams();
      params.append("country", country);
      params.append("city", city);
      params.append("method", 2);

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
  }, [city, country]);

  return (
    <div className="Today__div--container-list-pannel">
      <TodayTimesList today={today} />
      <Pannel today={today} searchField={inputCity} country={country} />
    </div>
  );
};