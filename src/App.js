import React, { Component } from "react";
import { NavBar } from "./components/navbar/NavBar";
import { SearchBar } from "./components/search-bar/SearchBar";
import NavBarTodayAndMounth from "./components/navbar-today-mounth/NavBarTodayAndMounth";
import Calendar from "./components/Calendar";
import Today from "./components/today-components/Today";
import { Routes, Route } from "react-router-dom";

//import { HorairesList } from "./components/day-list/horaires.list";
import "./App.css";

class App extends Component {

  constructor() {
    super();
    this.state = {
      inputCityValue : "lol",
      inputCountryValue : "ok"
    }
 
  }

  render() {
    return (
      <>
        <header>
          <NavBar />
          <SearchBar 
          handleChangeInputCityValue={(e)=> this.setState({inputCityValue : e.target.value})} 
          handleChangeInputCountryValue={(e)=> this.setState( {inputCountryValue : e.target.value})}/>
        </header>
        <NavBarTodayAndMounth />

        <Routes>
          <Route path="/" element={<Today city={this.state.inputCityValue} country={this.state.inputCountryValue}/>} />
          <Route path="/calendar" element={<Calendar city={this.state.inputCityValue} country={this.state.inputCountryValue}/>} />
        </Routes>
      </>
    );
  }
}

export default App;
