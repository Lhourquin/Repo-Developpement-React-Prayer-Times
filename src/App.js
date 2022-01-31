import React, { Component } from "react";
import { NavBar } from "./components/navbar/NavBar";
import { SearchBar } from "./components/search-bar/SearchBar";
import NavBarTodayAndMounth from "./components/navbar-today-mounth/NavBarTodayAndMounth";
import Calendar from "./components/Calendar";
import Day from "./components/Day";
import { Routes, Route } from "react-router-dom";

//import { HorairesList } from "./components/day-list/horaires.list";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <header>
          <NavBar />
          <SearchBar />
        </header>
        <NavBarTodayAndMounth />

        <Routes>
          <Route path="/" element={<Day />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </>
    );
  }
}

export default App;
