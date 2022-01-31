import React, { Component } from "react";
import Calendar from "./components/Calendar";
import Day from "./components/Day";
import NavBarTodayAndMounth from "./components/NavBarTodayAndMounth";
import { Routes, Route} from "react-router-dom";
import { SearchBar } from "./components/search-bar/searchbar.component";
//import { HorairesList } from "./components/day-list/horaires.list";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
          <SearchBar/>
          <NavBarTodayAndMounth />

          <Routes>
            <Route path="/" element={<Day/>} />
            <Route path="/calendar" element={<Calendar/>}/>
          </Routes>
      </div>
    );
  }
}

export default App;
