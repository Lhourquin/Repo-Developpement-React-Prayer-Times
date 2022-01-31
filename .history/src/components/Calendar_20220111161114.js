import React, { Component } from "react";
import { RowList } from "./calendar-list/row-list.component";

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
      <div>
        <h1>ok</h1>
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
        <RowList calendars={this.state.calandars}>
         
        </RowList>
              </table>
              
      </div>
    );
  }
}

export default Calendar;
