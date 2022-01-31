import React, { Component } from "react";
import {RowList} from "./calendar-list/row.list";

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
          Lucas
        </RowList>
        {
          
          this.state.calandars.map((obj, index) => (
            <div key={index}>
              <h3>Date du jour : {obj.date.gregorian.date}</h3>
              <h3>Fajr : {obj.timings.Fajr}</h3>
              <h3>Shourouk : {obj.timings.Sunrise}</h3>
              <h3>Dhur : {obj.timings.Dhuhr}</h3>
              <h3>Asr : {obj.timings.Asr}</h3>
              <h3>Maghrib : {obj.timings.Maghrib}</h3>
              <h3>Isha : {obj.timings.Isha}</h3>
            </div>
          ))
        }
      </div>
    );
  }
}

export default Calendar;
