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
      errorMessageInputCitySearchBarEmpty: "",
      errorMessageInputCountrySearchBarEmpty: "",
      errorMessageInputEmpty: "",
      city: "",
      country: "",
      method: 2,
      errorMessageLocation: "",
    };
  }

  componentDidMount() {
    this.intervalApiCall = setInterval(
      () => this.requestDataPosition.bind(this),
      1000
    );
    
  }

  componentWillUnmount() {
    clearInterval(this.intervalApiCall);
  }

  requestDataPosition() {
    navigator.geolocation.getCurrentPosition(
      this.getPosition.bind(this),
      this.notGetPosition.bind(this)
    );
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

    this.setState({ errorMessageLocation: "" });
  }

  notGetPosition() {
    this.setState({
      errorMessageLocation:
        "Nous n'avons pas pu avoir accées à votre localisation.",
    });
    setTimeout(() => {
      this.setState({ errorMessageLocation: "" });
    }, 5000);
  }

  render() {
    return (
      <>
        <header>
          <NavBar />

          <SearchBar
          inputCityValue={this.state.inputCityValue}
          inputCountryValue={this.state.inputCountryValue}
          errorMessageInputEmpty={this.state.errorMessageInputEmpty}
            errorMessageInputCity={
              this.state.errorMessageInputCitySearchBarEmpty
            }
            errorMessageInputCountry={
              this.state.errorMessageInputCountrySearchBarEmpty
            }
            getPosition={this.requestDataPosition.bind(this)}
            handleChangeInputCityValue={(event) => {
              if (event.target.value === "") {
                this.setState({
                  errorMessageInputCitySearchBarEmpty:
                    "Veuillez entrer votre ville.",
                });
                return;
              }/* else if (
                event.target.value.trim() === "" ||
                this.state.inputCountryValue == ""
              ) {
                this.setState({
                  errorMessageInputCitySearchBarEmpty:
                    "Veuillez entrer votre ville.",
                });
                this.setState({
                  errorMessageInputCountrySearchBarEmpty:
                    "Veuillez entrer votre pays.",
                });
                return;
              }*/ else {
                this.setState({
                  errorMessageInputCitySearchBarEmpty: "",
                });
                this.setState({ inputCityValue: event.target.value });
              }
            }}
            handleChangeInputCountryValue={(event) => {
              if (event.target.value === "") {
                this.setState({
                  errorMessageInputCountrySearchBarEmpty:
                    "Veuillez entrer votre pays.",
                });
                return;
              } /*else if (
                event.target.value.trim() === "" ||
                this.state.inputCityValue == ""
              ) {
                this.setState({
                  errorMessageInputCitySearchBarEmpty:
                    "Veuillez entrer votre ville.",
                });
                this.setState({
                  errorMessageInputCountrySearchBarEmpty:
                    "Veuillez entrer votre pays.",
                });
                return;
              } */else {
                this.setState({
                  errorMessageInputCountrySearchBarEmpty: "",
                });
                this.setState({ inputCountryValue: event.target.value });
              }
            }}
            handleSubmitValue={(event) => {
              event.preventDefault();

              if (
                this.state.inputCountryValue == "" ||
                this.state.inputCountryValue == null ||
                this.state.inputCityValue == "" ||
                this.state.inputCityValue == null
              ) {
                this.setState({
                  errorMessageInputEmpty:
                    "Veuillez remplir les barres de recherche.",
                });
                return;
              } else if (
                this.state.inputCountryValue !== "" ||
                this.state.inputCountryValue !== null ||
                this.state.inputCityValue !== "" ||
                this.state.inputCityValue !== null
              ) {
                this.setState({ city: this.state.inputCityValue });
                this.setState({ country: this.state.inputCountryValue });
                this.setState({
                  errorMessageInputEmpty:
                    "",
                });
              }
            }}
          />
        </header>
        <div style={{ textAlign: "center", color: "#bc4749" }}>
          {this.state.errorMessageLocation}
        </div>
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
