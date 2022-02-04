import React, { Component } from "react";
import { NavBar } from "./components/navbar/NavBar";
import { SearchBar } from "./components/search-bar/SearchBar";
import NavBarTodayAndMounth from "./components/navbar-today-mounth/NavBarTodayAndMounth";
import {Calendar} from "./components/calendar-components/Calendar"
import { Today } from "./components/today-components/Today";
import { Routes, Route } from "react-router-dom";

//import { HorairesList } from "./components/day-list/horaires.list";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputCityValue: "",
      inputCountryValue: "",
      city : "",
      country : "",
      method : 2
    };
  }

  render() {
    {console.log(this.state.method)}

   return (
      <>
        <header>
          <NavBar />
      
          <SearchBar
            handleChangeInputCityValue={(e) =>
              this.setState({ inputCityValue: e.target.value })
            }
            handleChangeInputCountryValue={(e) =>
              this.setState({ inputCountryValue: e.target.value })
            }
            handleSubmitValue={(event) => {
              event.preventDefault();

              this.setState({city : this.state.inputCityValue});
              this.setState({country : this.state.inputCountryValue});
      


            }
            }
          />
        </header>
        <NavBarTodayAndMounth />

        <Routes>
          <Route
            path="/"
            element={
              <Today
                city={this.state.city}
                country={this.state.country}
                method={this.state.method}
                getAngleOptionValue={(event) =>this.setState({method : event.target.value})}
              />
            }
          />
          <Route
            path="/calendar"
            element={
              <Calendar
                city={this.state.city}
                country={this.state.country}
                method={this.state.method}

              />
            }
          />
        </Routes>
      </>
    );
  }
}

export default App;
