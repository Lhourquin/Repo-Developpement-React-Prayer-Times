import React, { useState, useEffect } from "react";
import "./row-list.css";
import { CalculMidnightCalendar } from "../calcul-mignight-calendar/CalculMidnightCalandar";
import "./row-list.css";

export const RowList = ({ calendar }) => {
  let count = 1;
  let date = new Date(Date.now());
  const dayDate = date.getDay();
  const [now, setNow] = useState(new Date().setHours(0, 0, 0, 0));

  /*useEffect(() => {
    let interval = setInterval(() => {
      setNow(new Date().getTime().setHours(0, 0, 0, 0)); 
    });
  
    return () => clearInterval(interval);
  });*/

  useEffect(() => {
    calendar.map((obj) =>
      console.log(
        now ===
          new Date(
            `${obj.date.gregorian.month.en} ${obj.date.gregorian.day}, ${obj.date.gregorian.year} 00:00:00`
          ).setHours(0, 0, 0, 0)
          ? "lheure ok " +
              new Date(
                `${obj.date.gregorian.month.en} ${obj.date.gregorian.day}, ${obj.date.gregorian.year} 00:00:00`
              )
          : "false"
      )
    );
    console.log(now);
  }, []);

  return (
    <tbody className="salat-of-month ">
      {calendar.map((obj, index) => (
        <tr

        style={  new Date(
          `${obj.date.gregorian.month.en} ${obj.date.gregorian.day}, ${obj.date.gregorian.year}`
        ).setHours(0, 0, 0, 0) === new Date(now)
          ? {backgroundColor : "black"}
          : {}}
          className={
             now >
            new Date(
              `${obj.date.gregorian.month.en} ${obj.date.gregorian.day}, ${obj.date.gregorian.year} 00:00:00`
            )
              ? "container-horaires-list-passed"
              : now === new Date(
                `${obj.date.gregorian.month.en} ${obj.date.gregorian.day}, ${obj.date.gregorian.year} 00:00:00`
              ).setHours(0,0,0,0)
              ?  "container-horaires-list-today" : "container-horaires-list-normal"
              
             
       
          }
          key={index}
        >
          <td>{count++}</td>
          {/*console.log(obj.date.gregorian.month.en  + " " + obj.date.gregorian.day + " " + obj.date.gregorian.year)*/}
          <td className="">{obj.date.gregorian.date}</td>
          <td className="">{obj.date.hijri.date}</td>
          <td className="td-list-times">{obj.timings.Fajr.substr(0, 6)}</td>
          <td className="td-list-times">{obj.timings.Sunrise.substr(0, 6)}</td>
          <td className="td-list-times">{obj.timings.Dhuhr.substr(0, 6)}</td>
          <td className="td-list-times">{obj.timings.Asr.substr(0, 6)}</td>
          <td className="td-list-times">{obj.timings.Maghrib.substr(0, 6)}</td>
          <td className="td-list-times">{obj.timings.Isha.substr(0, 6)}</td>
          <td className="td-list-times">
            <CalculMidnightCalendar
              fajrTimeCalendar={obj.timings.Fajr.substr(0, 6)}
              maghrebTimeCalendar={obj.timings.Maghrib.substr(0, 6)}
            />
          </td>
        </tr>
      ))}
    </tbody>
  );
};
