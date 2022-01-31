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
        <RowList calendars={this.state.calandars}/>
          
      </div>
    );
  }
}

export default Calendar;
