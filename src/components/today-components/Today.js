import React, { Component } from "react";
import axios from "axios";
import "./Today.css"
import { TodayTimesList } from "./today-time-list/TodayTimesList"
import { Pannel } from "./pannel-time-today/Pannel";

class Today extends Component {
  constructor() {
    super();
    this.state = {
      today: []
    };
  }

  componentDidMount() {
    fetch(
      `https://api.aladhan.com/v1/timingsByCity?country=${this.props.country}&method=2&city=${this.props.city}`
    )
      .then((Response) => Response.json())
      .then((result) => this.setState({ today: [result] }));
  }

  render() {
    {console.log(this.props.city)} 
    {console.log(this.props.country)} 
    {console.log(this.state.today)}

    return (
      <div className="Today__div--container-list-pannel">
        <TodayTimesList today={this.state.today} />
        <Pannel today={this.state.today} searchField={this.props.city} />
      
      </div>
    );
  }
}

export default Today;
