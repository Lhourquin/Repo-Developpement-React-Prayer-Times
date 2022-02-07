import React from "react";
import "./row-list.css";

export const RowList = ({calendar}) => {
 // console.log(calendar);
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
        </tr>
      ))}
    </tbody>

  );
};
