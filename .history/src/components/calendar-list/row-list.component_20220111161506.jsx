import React from "react";
import "./row-list.css";

export const RowList = (props) => {
  console.log(props);
  return (
    <div className="salat-of-month ">
     {props.calendars.map((obj, index) => (
            
                <tbody key={index}>
                  <tr>
                    <td> {obj.date.gregorian.date}</td>
                    <td>{obj.timings.Fajr.substr(0,6)}</td>
                    <td>{obj.timings.Sunrise}</td>
                    <td> {obj.timings.Dhuhr}</td>
                    <td> {obj.timings.Asr}</td>
                    <td>{obj.timings.Maghrib}</td>
                    <td>{obj.timings.Isha}</td>
                  </tr>
                </tbody>
              
          ))}
    </div>
  );
};
