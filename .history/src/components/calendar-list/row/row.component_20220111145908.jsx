import React from "react";

export const Row = (props) => {

    (<div >
    <table >
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
          <td> {props.obj.date.gregorian.date}</td>
          <td>{props.obj.timings.Fajr}</td>
          <td>{props.obj.timings.Sunrise}</td>
          <td> {props.obj.timings.Dhuhr}</td>
          <td> {props.obj.timings.Asr}</td>
          <td>{props.obj.timings.Maghrib}</td>
          <td>{props.obj.timings.Isha}</td>
        </tr>
      </tbody>
    </table>
  </div>)
}