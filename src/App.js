import React, { Component } from "react";
import { NavBar } from "./components/navbar/NavBar";
import { SearchBar } from "./components/search-bar/SearchBar";
import NavBarTodayAndMounth from "./components/navbar-today-mounth/NavBarTodayAndMounth";
import { Calendar } from "./components/calendar-components/Calendar";
import { Today } from "./components/today-components/Today";
import { Routes, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputCityValue: "",
      inputCountryValue: "",
      city: "",
      country: "",
      method: 2,
    };
  }

  componentDidMount() {
    this.intervalApiCall = setInterval(()=> this.requestDataPosition.bind(this), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalApiCall)

  }

  requestDataPosition(){
    navigator.geolocation.getCurrentPosition(this.getPosition.bind(this), this.notGetPosition.bind(this));
  }

  getPosition(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    fetch(
      ` https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=fr`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ city: data.city });
        this.setState({ country: data.countryName });
      });
  }

  notGetPosition() {
    console.log("notGetPosition");
  }

  render() {
    return (
      <>
        <header>
          <NavBar />

          <SearchBar
            getPosition={this.requestDataPosition.bind(this)}
            handleChangeInputCityValue={(e) =>
              this.setState({ inputCityValue: e.target.value })
            }
            handleChangeInputCountryValue={(e) =>
              this.setState({ inputCountryValue: e.target.value })
            }
            handleSubmitValue={(event) => {
              event.preventDefault();

              this.setState({ city: this.state.inputCityValue });
              this.setState({ country: this.state.inputCountryValue });
            }}
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
                getAngleOptionValue={(event) =>
                  this.setState({ method: event.target.value })
                }
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
                getAngleOptionValue={(event) =>
                  this.setState({ method: event.target.value })
                }
              />
            }
          />
        </Routes>
      </>
    );
  }
}

export default App;
