import React, { Component } from "react";
import { NavBar } from "./components/navbar/NavBar";
import { SearchBar } from "./components/search-bar/SearchBar";
import NavBarTodayAndMounth from "./components/Homepage-components/navbar-today-mounth/NavBarTodayAndMounth";
import { Calendar } from "./components/Homepage-components/calendar-components/Calendar";
import { Today } from "./components/Homepage-components/today-components/Today";
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
      method: [
        { 
          value : "2",
          stringValue : "Sélectionner un angle"
        },
        {
          value: 2,
          stringValue: "Amérique du Nord (15°)",
        },
        {
          value: 15,
          stringValue: "Comité d'observation de la lune",
        },
        {
          value: 3,
          stringValue: "Ligue Mondiale Musulmane ( fajr 18° - icha 17° )",
        },
        {
          value: 4,
          stringValue: "Umm Al-Qura, Makkah ( fajr 18.5° - icha 90 min )",
        },
        {
          value: 5,
          stringValue: "Egypte ( fajr 19.5° - icha 17.5° )",
        },
        {
          value: 8,
          stringValue: "Golf ( fajr 19.5° - icha 90 min )",
        },
        {
          value: 9,
          stringValue: "Koweit ( fajr 18° - icha 17.5° )",
        },
        {
          value: 10,
          stringValue: "Qatar ( fajr 18° - icha 90 min )",
        },
        {
          value: 11,
          stringValue: "Singapour ( fajr 20) - icha 18° )",
        },
        {
          value: 12,
          stringValue: "UOIF (12°)",
        },
        {
          value: 13,
          stringValue: "Turquie ( fajr 18° - icha 17° )",
        },
      ],
      selectedMethodValue: "",
      selectedMethodStringValue: "",
      errorMessageLocation: "",
    };
  }

  componentDidMount() {
    this.intervalApiCall = setInterval(() =>
      this.requestDataPosition.bind(this)
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
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=fr`
    )
      .then((response) => response.json())
      .then((data) => {
        if (this.state.city === "" && this.state.country === "") {
          this.setState({ city: data.city });
          this.setState({ country: data.countryName });
        }
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
    console.log(this.state.selectedMethodStringValue)
    return (
      <>
        <header>
          <NavBar />

          <SearchBar
            inputCity={this.state.inputCityValue}
            inputCountry={this.state.inputCountryValue}
            getPosition={this.requestDataPosition.bind(this)}
            handleChangeInputCityValue={(e) =>
              this.setState({ inputCityValue: e.target.value })
            }
            handleChangeInputCountryValue={(e) =>
              this.setState({ inputCountryValue: e.target.value })
            }
            handleSubmitValue={(event) => {
              event.preventDefault();
              const key = event.keyCode;

              if (key === 13) {
                if (
                  this.state.inputCityValue === "" ||
                  this.state.inputCountryValue === ""
                ) {
                  this.setState({ city: "" });
                  this.setState({ country: "" });
                } else {
                  this.setState({ city: this.state.inputCityValue });
                  this.setState({ country: this.state.inputCountryValue });
                  setTimeout(() => {
                    this.setState({ inputCityValue: "" });
                    this.setState({ inputCountryValue: "" });
                  }, 1000);
                }
              }

              if (
                this.state.inputCityValue === "" ||
                this.state.inputCountryValue === ""
              ) {
                this.setState({ city: "" });
                this.setState({ country: "" });
              } else {
                this.setState({ city: this.state.inputCityValue });
                this.setState({ country: this.state.inputCountryValue });
                setTimeout(() => {
                  this.setState({ inputCityValue: "" });
                  this.setState({ inputCountryValue: "" });
                }, 1000);
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
                getAngleOptionValue={(event) => {
                  let index = event.nativeEvent.target.selectedIndex;
                  this.setState({ selectedMethodValue: event.target.value });
                  this.setState({
                    selectedMethodStringValue: event.target[index].innerHTML,
                  });
                }}
                selectedMethodValue={this.state.selectedMethodValue}
                selectedMethodStringValue={this.state.selectedMethodStringValue}
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
                getAngleOptionValue={(event) => {
                  let index = event.nativeEvent.target.selectedIndex;
                  this.setState({ selectedMethodValue: event.target.value });
                  this.setState({
                    selectedMethodStringValue: event.target[index].innerHTML,
                  });
                }}
                selectedMethodValue={this.state.selectedMethodValue}
                selectedMethodStringValue={this.state.selectedMethodStringValue}
              />
            }
          />
        </Routes>
      </>
    );
  }
}

export default App;
