import React, { Component } from "react";
import { HorairesList } from "./day-list/horaireslist.component";
import { Pannel } from "./day-list/time-table-pannel/pannel.component";
import { SearchBar } from "./search-bar/searchbar.component";
import CountDown from "./CountDown";


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
      <div>
        <h1>Horaires du jour</h1>

        <HorairesList today={this.state.today} />
        <h2>Pannel</h2>
        <Pannel today={this.state.today} searchField={this.state.searchField} />
        <CountDown/>

      </div>
    );
  }
}

export default Day;
