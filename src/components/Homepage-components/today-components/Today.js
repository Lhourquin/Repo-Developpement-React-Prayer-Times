import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Today.css";
import { TodayTimesList } from "./today-time-list/TodayTimesList";
import { Pannel } from "./pannel-time-today/Pannel";

export const Today = ({
  city,
  country,
  getAngleOptionValue,
  method,
  selectedMethodStringValue,
}) => {
  const [today, setToday] = useState([]);
  const [inputCity, setInputCity] = useState("");
  const [lastCity, setLastCity] = useState("");
  const [now, setNow] = useState(new Date(Date.now()).getTime());
  //console.log(dateIcha)
  useEffect(() => {
    let interval = setInterval(() => {
      setNow(new Date(Date.now()).getTime());
    }, );

    return () => clearInterval(interval);
  });

  useEffect(() => {
    let timer = setTimeout(() => {
      setToday(JSON.parse(localStorage.getItem("TodayTimes") || "[]"));

      if (city !== "" && country !== "") {
        setInputCity(city);
      } else if (city == "") {
        if (localStorage.getItem("City")) {
          setLastCity(localStorage.getItem("City"));
        }
      }
    });

    return () => clearTimeout(timer);
  }, [now]);

  const [dateFajr, setDateFajr] = useState();
  const [dateShourouq, setDateShourouq] = useState("");
  const [dateDhohr, setDateDhohr] = useState("");
  const [dateAsr, setDateAsr] = useState("");
  const [dateMaghreb, setDateMaghreb] = useState("");
  const [dateIcha, setDateIcha] = useState("");

  useEffect(() => {
    today.map((obj) => {
      setDateFajr(
        new Date(
          `${obj.data.date.gregorian.month.en} ${obj.data.date.gregorian.day}, ${obj.data.date.gregorian.year} ${obj.data.timings.Fajr}:00`
        )
      );
      setDateShourouq(
        new Date(
          `${obj.data.date.gregorian.month.en} ${obj.data.date.gregorian.day}, ${obj.data.date.gregorian.year} ${obj.data.timings.Sunrise}:00`
        )
      );
      setDateDhohr(
        new Date(
          `${obj.data.date.gregorian.month.en} ${obj.data.date.gregorian.day}, ${obj.data.date.gregorian.year} ${obj.data.timings.Dhuhr}:00`
        )
      );
      setDateAsr(
        new Date(
          `${obj.data.date.gregorian.month.en} ${obj.data.date.gregorian.day}, ${obj.data.date.gregorian.year} ${obj.data.timings.Asr}:00`
        )
      );
      setDateMaghreb(
        new Date(
          `${obj.data.date.gregorian.month.en} ${obj.data.date.gregorian.day}, ${obj.data.date.gregorian.year} ${obj.data.timings.Maghrib}:00`
        )
      );
      setDateIcha(
        new Date(
          `${obj.data.date.gregorian.month.en} ${obj.data.date.gregorian.day}, ${obj.data.date.gregorian.year} ${obj.data.timings.Isha}:00`
        )
      );
    });
  }, [today]);

  return (
    <>
      <div className="Today__div--container-list-pannel">
        <TodayTimesList
          today={today}
          now={now}
          dateFajr={dateFajr}
          dateShourouq={dateShourouq}
          dateDhohr={dateDhohr}
          dateAsr={dateAsr}
          dateMaghreb={dateMaghreb}
          dateIcha={dateIcha}
        />
        <Pannel
          today={today}
          searchField={city !== "" ? inputCity : lastCity}
          country={country}
          getAngleOptionValue={getAngleOptionValue}
          method={method}
          selectedMethodStringValue={selectedMethodStringValue}
          now={now}
          dateFajr={dateFajr}
          dateShourouq={dateShourouq}
          dateDhohr={dateDhohr}
          dateAsr={dateAsr}
          dateMaghreb={dateMaghreb}
          dateIcha={dateIcha}
        />
      </div>
    </>
  );
};
