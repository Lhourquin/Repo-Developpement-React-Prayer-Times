import React, { Component } from "react";
import { Route } from "react-router-dom";
import Calendar from "./components/Calendar";
import Day from './components/Day';

//import { HorairesList } from "./components/day-list/horaires.list";
import "./App.css";

const CalendarPage = () => {
  <div>
            <Calendar/>

  </div>
}
class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Day}/>
        <Route exact path='/calendar' component={CalendarPage}/>

      </div>
    );
  }
}

export default App;
