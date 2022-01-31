import React from "react";

export const Row = (props) => {

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
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> {props.date.gregorian.date}</td>
          <td>{props.timings.Fajr}</td>
          <td>{props.timings.Sunrise}</td>
          <td> {props.timings.Dhuhr}</td>
          <td> {props.timings.Asr}</td>
          <td>{props.timings.Maghrib}</td>
          <td>{props.timings.Isha}</td>
        </tr>
      </tbody>
    </table>
}