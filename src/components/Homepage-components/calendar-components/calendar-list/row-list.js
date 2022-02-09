import React from "react";
import "./row-list.css";
import { CalculMidnightCalendar } from "../calcul-mignight-calendar/CalculMidnightCalandar";

export const RowList = ({calendar}) => {
  return (
        <tbody className="salat-of-month ">
      {calendar.map((obj, index) => (
        <tr key={index}>
          <td>{obj.date.gregorian.date}</td>
          <td>{obj.timings.Fajr.substr(0, 6)}</td>
          <td>{obj.timings.Sunrise.substr(0, 6)}</td>
          <td>{obj.timings.Dhuhr.substr(0, 6)}</td>
          <td>{obj.timings.Asr.substr(0, 6)}</td>
          <td>{obj.timings.Maghrib.substr(0, 6)}</td>
          <td>{obj.timings.Isha.substr(0, 6)}</td>
          <td><CalculMidnightCalendar fajrTimeCalendar={obj.timings.Fajr.substr(0, 6)} maghrebTimeCalendar={obj.timings.Maghrib.substr(0, 6)}/></td>
        </tr>
      ))}
    </tbody>

  );
};
