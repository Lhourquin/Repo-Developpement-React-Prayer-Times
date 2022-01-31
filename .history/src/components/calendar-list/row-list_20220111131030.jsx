import React from "react";
import "./row-list.css";

export const RowList = (props) => {
  //console.log(props);


      {this.props.calandars.map((obj, index) => (
          <table key={index}>
            <thead>
              <tr>
                <td>Date</td>
                <td>Fajr</td>
                <td>Shourouk</td>
                <td>Dhor</td>
                <td>Asr</td>
                <td>Maghreb</td>
                <td>Icha</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> {obj.date.gregorian.date}</td>
                <td>{obj.timings.Fajr}</td>
                <td>{obj.timings.Sunrise}</td>
                <td> {obj.timings.Dhuhr}</td>
                <td> {obj.timings.Asr}</td>
                <td>{obj.timings.Maghrib}</td>
                <td>{obj.timings.Isha}</td>
              </tr>
            </tbody>
          </table>
      ))}
  
};
