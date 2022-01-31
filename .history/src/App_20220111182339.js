import React, { Component } from "react";
import Calendar from "./components/Calendar";
import Day from './components/Day';
//import { HorairesList } from "./components/day-list/horaires.list";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Calendar/>
        <Day/>
      </div>
    );
  }
}

export default App;
