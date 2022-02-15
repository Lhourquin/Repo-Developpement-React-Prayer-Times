import React, { useState, useEffect } from "react";
import axios from "axios";
import { RowList } from "./calendar-list/row-list";

export const Calendar = ({ city, country, getAngleOptionValue, method }) => {
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
        const { data } = await axios
          .get(`https://api.aladhan.com/v1/calendarByCity`, request)
          .then((obj) => obj.data);
        setCalendar(data);
      }, 1000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [city, country, method]);
  console.log(calendar);
  return (
    <div>
      <h1>Calendrier du mois</h1>
      <select onChange={getAngleOptionValue}>
        <option value="2">Amérique du Nord (15°)</option>
        <option value="15">Comité d'observation de la lune</option>
        <option value="3">Ligue Mondiale Musulmane</option>
        <option value="4">Umm Al-Qura, Makkah</option>
        <option value="5">Egypte</option>
        <option value="8">Golf</option>
        <option value="9">Koweit</option>
        <option value="10">Qatar</option>
        <option value="11">Singapour</option>
        <option value="12">Union des Organisations islamiques de France</option>
        <option value="13">Turquie</option>
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
