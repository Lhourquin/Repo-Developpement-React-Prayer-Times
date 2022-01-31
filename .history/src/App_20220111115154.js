import React, { Component } from "react";
import Calendar from "./components/Calendar";
import "./App.css";
import { HorairesList } from "./components/day-list/horaires.list";

class App extends Component {
  render() {
    return (
      <div>
        <Calendar />
        <HorairesList name="Lucas" />
      </div>
    );
  }
}

export default App;
