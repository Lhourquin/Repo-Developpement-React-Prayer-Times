import React, { Component } from "react";
import Calendar from "./components/Calendar";
import Day from './components/Day';
import { SearchBar } from "./component/search-bar/searchbar.component";

//import { HorairesList } from "./components/day-list/horaires.list";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
        <Calendar/>
        <Day/>
      </div>
    );
  }
}

export default App;
