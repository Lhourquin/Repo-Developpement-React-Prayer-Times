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
          <td> {obj.props.date.gregorian.date}</td>
          <td>{obj.props.timings.Fajr}</td>
          <td>{obj.props.timings.Sunrise}</td>
          <td> {obj.props.timings.Dhuhr}</td>
          <td> {obj.props.timings.Asr}</td>
          <td>{obj.props.timings.Maghrib}</td>
          <td>{obj.props.timings.Isha}</td>
        </tr>
      </tbody>
    </table>
}