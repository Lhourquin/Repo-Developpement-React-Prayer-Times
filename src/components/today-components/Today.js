import React, { Component } from "react";
import "./Today.css"
import { TodayTimesList } from "./today-time-list/TodayTimesList"
import { Pannel } from "./pannel-time-today/Pannel";

class Day extends Component {
  constructor() {
    super();
    this.state = {
      today: [],
      searchField: "Paris",
    };
  }

  componentDidMount() {
    fetch(
      `https://api.aladhan.com/v1/timingsByCity?country=France&method=2&city=${this.state.searchField}`
    )
      .then((Response) => Response.json())
      .then((result) => this.setState({ today: [result] }));
  }

  render() {
    return (
      <div className="Today__div--container-list-pannel">
        <TodayTimesList today={this.state.today} />
        <Pannel today={this.state.today} searchField={this.state.searchField} />

      </div>
    );
  }
}

export default Day;
