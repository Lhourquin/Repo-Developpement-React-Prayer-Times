import React, { useState, useEffect } from "react";
import axios from "axios";

import { NavBar } from "./components/navbar/NavBar";
import { SearchBar } from "./components/search-bar/SearchBar";
import NavBarTodayAndMounth from "./components/Homepage-components/navbar-today-mounth/NavBarTodayAndMounth";
import { Calendar } from "./components/Homepage-components/calendar-components/Calendar";
import { Today } from "./components/Homepage-components/today-components/Today";
import { Routes, Route } from "react-router-dom";
import "./App.css";
/*
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
          value: "2",
          stringValue: "Sélectionner un angle",
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
      TodayArray: "",
      Today : ""
    };
  }

  componentDidMount() {
    this.intervalApiCall = setInterval(() => {
      this.requestDataPosition.bind(this);
      localStorage.setItem("TodayTimes", JSON.stringify(this.state.TodayArray));
      this.setState({ Today : JSON.parse(localStorage.getItem("TodayTimes") || "[]")})

      
    });
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
        this.setState({ city: data.city });
        this.setState({ country: data.countryName });
        localStorage.setItem("City", data.city);
        localStorage.setItem("Country", data.countryName);
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
  getTodayTimesList(arg) {
    this.setState({ TodayArray: arg });
  }

  render() {
    //console.log(this.state.Today);
    return (
      <>
        <header>
          <NavBar />

          <SearchBar
            inputCity={this.state.inputCityValue}
            inputCountry={this.state.inputCountryValue}
            getPosition={this.requestDataPosition.bind(this)}
            handleChangeInputCityValue={(e) => {
              this.setState({ inputCityValue: e.target.value });
            }}
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
                  localStorage.setItem("city", this.state.inputCityValue);

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
                localStorage.setItem("City", this.state.inputCityValue);

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
                getTodayTimesList={this.getTodayTimesList.bind(this)}
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
                todayArray={this.state.Today}
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
*/
const App = () => {
  const [inputCityValue, setInputCityValue] = useState("");
  const [inputCountryValue, setInputCountryValue] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [method, setMethod] = useState([
    {
      value: "2",
      stringValue: "Sélectionner un angle",
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
  ]);

  
  const [selectedMethodValue, setSelectedMethodValue] = useState("");
  const [selectedMethodStringValue, setSelectedMethodStringValue] =
    useState("");
  const [errorMessageLocation, setErrorMessageLocation] = useState("");

  const requestDataPosition = () => {
    navigator.geolocation.getCurrentPosition(getPosition, notGetPosition);
  };

  const getPosition = (position) => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=fr`
    )
      .then((response) => response.json())
      .then((data) => {
        
        localStorage.setItem("City", data.city);
        localStorage.setItem("Country", data.countryName);
        setCity(localStorage.getItem("City"));
        setCountry(localStorage.getItem("Country"));
      });

    setErrorMessageLocation("");
  };

  const notGetPosition = () => {
    setErrorMessageLocation(
      "Nous n'avons pas pu avoir accées à votre localisation."
    );
    setTimeout(() => {
      setErrorMessageLocation("");
    }, 5000);
  };

  // Gérer la ville dans le pannel
  /* const [inputCity, setInputCity] = useState("");
  const [lastCity, setLastCity] = useState("");
  useEffect(() => {
    if (city !== "" && country !== "") {
      setInputCity(city);
      setInputCountry(country);
    } else if (city == "") {
      setLastCity(inputCity);
    }
  }, [city, country]);*/
  useEffect(() => {
    if(localStorage.getItem("City") && localStorage.getItem("Country")){
      setCity(localStorage.getItem("City"));
      setCountry(localStorage.getItem("Country"));
    }
  })

  const [todayListTimes, setTodayTest] = useState("");
  // regler le changement de methode de calcul

  const [methodValue, setMethodValue] = useState("");

  useEffect(() => {
    if (selectedMethodValue === "") {
      setMethodValue(method[0].value);
    } else if (selectedMethodValue !== "") {
      setMethodValue(selectedMethodValue);
    }
  }, [method, selectedMethodValue]);

  useEffect(() => {
    let timer = null;
    if (city && country && methodValue) {
      let params = new URLSearchParams();

      params.append("country", country);
      params.append("city", city);
      params.append("method", methodValue);

      let request = {
        params: params,
      };
      timer = setTimeout(async () => {
        const { data } = await axios.get(
          `https://api.aladhan.com/v1/timingsByCity`,
          request
        );
        localStorage.setItem("TodayTimes", JSON.stringify([data]));
      }, 1000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [city, country, methodValue]);

  /* const [JSONTodayTimesSalat, setJSONTodayTimesSalat] = useState("");

  useEffect(() => {
    setJSONTodayTimesSalat(
      localStorage.setItem("TodayTimes", JSON.stringify(todayTest))
    );
  },[todayTest]);

  const [todayTimesSalat, setTodayTimesSalat] = useState("");

  useEffect(() => {
    setTodayTimesSalat(JSON.parse(localStorage.getItem("TodayTimes") || "[]"));
  }, [JSONTodayTimesSalat]);*/

  return (
    <>
      <header>
        <NavBar />
        {console.log(todayListTimes)}
        {console.log("city : " + city)}
        {console.log("country : " + country)}
        {console.log("")}
        <SearchBar
          inputCity={inputCityValue}
          inputCountry={inputCountryValue}
          getPosition={requestDataPosition}
          handleChangeInputCityValue={(e) => {
            setInputCityValue(e.target.value);
          }}
          handleChangeInputCountryValue={(e) =>
            setInputCountryValue(e.target.value)
          }
          handleSubmitValue={(event) => {
            event.preventDefault();
            const key = event.keyCode;

            if (key === 13) {
              if (inputCityValue === "" || inputCountryValue === "") {
                setCity("");
                setCountry("");
              } else {
                localStorage.setItem("City", inputCityValue);
                localStorage.setItem("Country", inputCountryValue);
                setCity(localStorage.getItem("City"));
                setCountry(localStorage.getItem("Country"));
                setTimeout(() => {
                  setInputCityValue("");
                  setInputCountryValue("");
                }, 1000);
              }
            }

            if (inputCityValue === "" || inputCountryValue === "") {
              setCity("");
              setCountry("");
            } else {
              localStorage.setItem("City", inputCityValue);
              localStorage.setItem("Country", inputCountryValue);
              setCity(localStorage.getItem("City"));
              setCountry(localStorage.getItem("Country"));
              setTimeout(() => {
                setInputCityValue("");
                setInputCountryValue("");
              }, 1000);
            }
          }}
        />
      </header>
      <div style={{ textAlign: "center", color: "#bc4749" }}>
        {errorMessageLocation}
      </div>
      <NavBarTodayAndMounth />

      <Routes>
        <Route
          path="/"
          element={
            <Today
              //   inputCity={inputCity}
              // lastCity={lastCity}
              todayListTimes={todayListTimes}
              city={city}
              country={country}
              method={method}
              getAngleOptionValue={(event) => {
                let index = event.nativeEvent.target.selectedIndex;
                setSelectedMethodValue(event.target.value);
                setSelectedMethodStringValue(event.target[index].innerHTML);
              }}
              selectedMethodValue={selectedMethodValue}
              selectedMethodStringValue={selectedMethodStringValue}
            />
          }
        />
        <Route
          path="/calendar"
          element={
            <Calendar
              city={city}
              country={country}
              method={method}
              getAngleOptionValue={(event) => {
                let index = event.nativeEvent.target.selectedIndex;
                setSelectedMethodValue(event.target.value);
                setSelectedMethodStringValue(event.target[index].innerHTML);
              }}
              selectedMethodValue={selectedMethodValue}
              selectedMethodStringValue={selectedMethodStringValue}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
