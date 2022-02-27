import React, { useState, useEffect } from "react";
import axios from "axios";

import { NavBar } from "./components/navbar/NavBar";
import { SearchBar } from "./components/search-bar/SearchBar";
import NavBarTodayAndMounth from "./components/Homepage-components/navbar-today-mounth/NavBarTodayAndMounth";
import { Calendar } from "./components/Homepage-components/calendar-components/Calendar";
import { Today } from "./components/Homepage-components/today-components/Today";
import { Routes, Route } from "react-router-dom";
import "./App.css";

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
      stringValue: "Singapour ( fajr 20°) - icha 18° )",
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

  useEffect(() => {
    if (localStorage.getItem("City") && localStorage.getItem("Country")) {
      setCity(localStorage.getItem("City"));
      setCountry(localStorage.getItem("Country"));
    }
  });

  const [methodValue, setMethodValue] = useState("");

  useEffect(() => {
    if (selectedMethodValue === "") {
      if (
        localStorage.getItem("SelectedMethodValue") &&
        localStorage.getItem("SelectedMethodStringValue")
      ) {
        setMethodValue(localStorage.getItem("SelectedMethodValue"));
        setSelectedMethodStringValue(
          localStorage.getItem("SelectedMethodStringValue")
        );
      } else {
        setMethodValue(method[0].value);
      }
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
        const { data } = await axios
          .get(`https://api.aladhan.com/v1/calendarByCity`, request)
          .then(
            (currentTimesOfTheDateClicked) => currentTimesOfTheDateClicked.data
          );
        localStorage.setItem("Calendar", JSON.stringify(data));
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
        {console.log(selectedMethodValue)}
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
              city={city}
              country={country}
              method={method}
              getAngleOptionValue={(event) => {
                let index = event.nativeEvent.target.selectedIndex;
                localStorage.setItem("SelectedMethodValue", event.target.value);
                localStorage.setItem(
                  "SelectedMethodStringValue",
                  event.target[index].innerHTML
                );

                setSelectedMethodValue(
                  localStorage.getItem("SelectedMethodValue")
                );
                setSelectedMethodStringValue(
                  localStorage.getItem("SelectedMethodStringValue")
                );
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
                localStorage.setItem("SelectedMethodValue", event.target.value);
                localStorage.setItem(
                  "SelectedMethodStringValue",
                  event.target[index].innerHTML
                );
                setSelectedMethodValue(
                  localStorage.getItem("SelectedMethodValue")
                );
                setSelectedMethodStringValue(
                  localStorage.getItem("SelectedMethodStringValue")
                );
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
