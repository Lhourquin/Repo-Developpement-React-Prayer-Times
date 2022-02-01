import React, { useState, useEffect } from "react";
import axios from "axios";
import { RowList } from "./calendar-list/row-list";

export const Calendar = ({city, country}) => {
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    let timer = null;
    if (city || country) {
      let params = new URLSearchParams();
      params.append("country", country);
      params.append("city", city);
      params.append("method", 2);

      let request = {
        params: params,
      };
      timer = setTimeout(async () => {
        const { data } = await axios.get(
          `https://api.aladhan.com/v1/calendarByCity`,
          request
        ).then(obj => obj.data);
        setCalendar(data);
      }, 1000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [city, country]);

  return (
    <div>
      <h1>Calendrier du mois</h1>
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
        <RowList calendar={calendar} />
      </table>
    </div>
  );
};
/*
class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      calandars: [],
    };
  }

  componentDidMount() {
    fetch(
      `http://api.aladhan.com/v1/calendarByCity?country=${this.props.country}&method=2&city=${this.props.city}`
    )
      .then((Response) => Response.json())
      .then((obj) => obj.data)
      .then((result) => this.setState({ calandars: result }));
  }

  render() {
    return (
      <div>
        <h1>Calendrier du mois</h1>
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
          <RowList calendars={this.state.calandars} />
        </table>
      </div>
    );
  }
}

export default Calendar;
*/
