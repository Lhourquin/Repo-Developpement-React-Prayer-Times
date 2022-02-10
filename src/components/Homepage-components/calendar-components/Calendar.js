import React, { useState, useEffect } from "react";
import axios from "axios";
import { RowList } from "./calendar-list/row-list";

export const Calendar = ({city, country, getAngleOptionValue, method}) => {
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    let timer = null;
    if (city && country && method) {
      let params = new URLSearchParams();
      params.append("country", country);
      params.append("city", city);
      params.append("method", method);

      let request = {
        params: params,
      };
      timer = setTimeout(async () => {
        const { data } = await axios.get(
          `https://api.aladhan.com/v1/calendarByCity`,
          request
        ).then(obj => obj.data);
        setCalendar(data);
      }, 1000);
    }
  
    return () => {
      clearTimeout(timer);
    };
  }, [city, country, method]);
  console.log(calendar)
  return (
    <div>
      <h1>Calendrier du mois</h1>
      <select>
              <option onClick={getAngleOptionValue} value="2">
                15°
              </option>
              <option onClick={getAngleOptionValue} value="3">
                Muslim World League
              </option>
              <option onClick={getAngleOptionValue} value="4">
                Umm Al-Qura University, Makkah
              </option>
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