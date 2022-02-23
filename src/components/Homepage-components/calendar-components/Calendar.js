import React, { useState, useEffect } from "react";
import axios from "axios";
import { RowList } from "./calendar-list/row-list";
import "./Calendar.css";

export const Calendar = ({
  city,
  country,
  getAngleOptionValue,
  method,
  selectedMethodValue,
  selectedMethodStringValue,
}) => {
  const [calendar, setCalendar] = useState([]);
  const [methodValue, setMethodValue] = useState("");

  useEffect(() => {
    if (selectedMethodValue === "") {
      setMethodValue(method[0].value);
    } else if (selectedMethodValue !== "") {
      setMethodValue(selectedMethodValue);
    }
  }, [method, selectedMethodValue]);

  useEffect(() => {
    let timer = null;
    if (city && country && methodValue) {
      let params = new URLSearchParams();
      params.append("country", country);
      params.append("city", city);
      params.append("method", methodValue);

      let request = {
        params: params,
      };
      timer = setTimeout(async () => {
        const { data } = await axios
          .get(`https://api.aladhan.com/v1/calendarByCity`, request)
          .then((obj) => obj.data);
        setCalendar(data);
      }, 1000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [city, country, methodValue]);
  console.log(calendar);

  const [acutalMonth, setActualMonth] = useState(
    new Date(Date.now()).toLocaleString(undefined, {
      month: "long",
    })
  );

  return (
    <div className="calendar">
      <div className="calendar-container-month-degreeSeclect">
        <div>
          <h2 className="calendar-title-month">
            {acutalMonth.charAt(0).toUpperCase() + acutalMonth.slice(1)}{" "}
            <span>
              {" "}
              <i className="fas fa-info-circle info-icons"></i>
            </span>
          </h2>
        </div>

        <select onChange={getAngleOptionValue}>
          {method.map((obj, index) => (
            <option key={index} value={obj.value}>
              {obj.stringValue}
            </option>
          ))}
        </select>
      </div>

      <table>
        <thead className="thead-name-of-times">
          <tr className="name-of-times-list">
            <td>Date</td>
            <td>Date hégirienne</td>
            <td>Fajr</td>
            <td>Shourouk</td>
            <td>Dhor</td>
            <td>Asr</td>
            <td>Maghreb</td>
            <td>Icha</td>
            <td>Mi-nuit</td>
          </tr>
        </thead>
        <RowList calendar={calendar} />
      </table>
    </div>
  );
};
