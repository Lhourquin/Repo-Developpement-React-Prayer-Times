import React, { Component } from "react";
import { RowList } from "./calendar-list/row-list";

class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      calandars: [],
    };
  }

  componentDidMount() {
    fetch(
      `http://api.aladhan.com/v1/calendarByCity?country=France&method=2&city=Tourcoing`
    )
      .then((Response) => Response.json())
      .then((obj) => obj.data)
      .then((result) => this.setState({ calandars: result }));
  }

  render() {
    return (
      <div className="Calendar">
        <h1>Calendar list</h1>
        <RowList>
          {this.state.calandars.map((obj, index) => (
            <div key={index}>
              <table className="salat-of-month">
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
            </div>
          ))}
        </RowList>
      </div>
    );
  }
}

export default Calendar;
