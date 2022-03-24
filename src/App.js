import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavBar } from "./components/navbar/NavBar";
import { SearchBar } from "./components/search-bar/SearchBar";
import NavBarTodayAndMounth from "./components/Homepage-components/navbar-today-mounth/NavBarTodayAndMounth";
import { Home } from "./components/Homepage-components/Home";
import { Calendar } from "./components/Homepage-components/calendar-components/Calendar";
import { Today } from "./components/Homepage-components/today-components/Today";
import { Masjid } from "./components/masjid-component/Masjid";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

const App = () => {
  const [isOnLine, setIsOnLine] = useState(navigator.onLine);
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
    //const API_KEY = `8be0f83c6058dc08796bea8b8309a808`;
    fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=fr`

      /** `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`*/
    )
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("City", data.city);
        localStorage.setItem("Country", data.countryName);
        setCity(localStorage.getItem("City"));
        setCountry(localStorage.getItem("Country"));
        //  console.log(data)
      });


    //setErrorMessageLocation("Le service de localisation est momentanément indisponible.");

    setTimeout(() => {
      setErrorMessageLocation("");
    }, 5000);
  };

  const notGetPosition = () => {
    let userAgent = navigator.userAgent;
    let browserName;
    if (userAgent.match(/chrome|chromium|crios/i)) {
      browserName = "chrome";
    } else if (userAgent.match(/firefox|fxios/i)) {
      browserName = "firefox";
    } else if (userAgent.match(/safari/i)) {
      browserName = "safari";
    } else if (userAgent.match(/opr\//i)) {
      browserName = "opera";
    } else if (userAgent.match(/edg/i)) {
      browserName = "edge";
    } else {
      browserName = "No browser detection";
    }

    if (browserName === "safari") {
      setErrorMessageLocation(
        "Le service de localisation ne fonctionne pas sur Safari."
      );
    } else {
      setErrorMessageLocation(
        "Nous n'avons pas pu avoir accées à votre localisation."
      );
    }

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
    if (city && country && methodValue && isOnLine) {
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
  }, [city, country, methodValue, isOnLine]);

  useEffect(() => {
    let timer = null;
    if (city && country && methodValue && isOnLine) {
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
  }, [city, country, methodValue, isOnLine]);

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
  //console.log(isOnLine);
  function submitChannel(cityInputClient) {
    fetch("http://localhost:8000/mosques", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cityInputClient }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Succes : ', data)
      })
      .catch((err) => {
        console.error('Error: ', err)
      });
    console.log(cityInputClient)
  }

  useEffect(()=> {
    submitChannel(city);
  }, [city]);

  return (
    <>
      <header>
        <NavBar />
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
                localStorage.setItem("City", inputCityValue.trim());
                localStorage.setItem("Country", inputCountryValue.trim());
                setCity(localStorage.getItem("City"));
                setCountry(localStorage.getItem("Country"));
                setTimeout(() => {
                  setInputCityValue("");
                  setInputCountryValue("");
                });

              }
            }

            if (inputCityValue === "" || inputCountryValue === "") {
              setCity("");
              setCountry("");
            } else {
              localStorage.setItem("City", inputCityValue.trim());
              localStorage.setItem("Country", inputCountryValue.trim());
              setCity(localStorage.getItem("City"));
              setCountry(localStorage.getItem("Country"));
              setTimeout(() => {
                setInputCityValue("");
                setInputCountryValue("");
              });
            }
           // submitChannel(city);

          }}
        />
      </header>
      <div style={{ textAlign: "center", color: "#bc4749" }}>
        {errorMessageLocation}
      </div>
      <Routes>

        <Route
          path="/*"
          element={
            <>
              <NavBarTodayAndMounth />
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
            </>

          }
        >
          <Route
          // path=""

          //element={
          /*  <Today
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
            />*/
          //  }
          />

          <Route
            path="calendar"
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
        </Route>

        <Route
          path="/masjid"

          element={
            <Masjid
              city={city}
              country={country}
            />
          }
        />


      </Routes>
    </>
  );
};

export default App;
