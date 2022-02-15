import React, { useState, useEffect } from "react";
import axios from "axios";
import { RowList } from "./calendar-list/row-list";

export const Calendar = ({
  city,
  country,
  getAngleOptionValue,
  method,
  selectedMethodValue,
  selectedMethodStringValue
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
  return (
    <div>
      <h1>Calendrier du mois</h1>
      <span style={{ fontSize: "10px" }}>
        Angle :{" "}
        {selectedMethodStringValue === ""
          ? "Amérique du Nord (15°)"
          : selectedMethodStringValue}
      </span>
      <select onChange={getAngleOptionValue}>
        {method.map((obj, index) => (
          <option key={index} value={obj.value}>
            {obj.stringValue}
          </option>
        ))}
      </select>
      <table>
        <thead>
          <tr>
            <td>Date</td>
            <td>Fajr</td>
            <td>Shourouk</td>
            <td>Dhor</td>
            <td>Asr</td>
            <td>Maghreb</td>
            <td>Icha</td>
            <td>Milieu de la nuit</td>
          </tr>
        </thead>
        <RowList calendar={calendar} />
      </table>
    </div>
  );
};
