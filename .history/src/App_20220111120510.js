import React, { Component } from "react";
import Calendar from "./components/Calendar";
import { HorairesList } from "./components/day-list/horaires.list";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Calendar />
        <HorairesList>
          <h1>Lucas</h1>
        </HorairesList>
      </div>
    );
  }
}

export default App;
