import React, { useState, useEffect } from "react";
import axios from "axios";
import { RowList } from "./calendar-list/row-list";
import { CalculMidnightCalendar } from "./calcul-mignight-calendar/CalculMidnightCalandar";
import "./Calendar.css";

export const Calendar = ({
  city,
  country,
  getAngleOptionValue,
  method,
  // selectedMethodValue,
  selectedMethodStringValue,
}) => {
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCalendar(JSON.parse(localStorage.getItem("Calendar") || "[]"));
    });
    return () => clearTimeout(timer);
  });
  /*  const [methodValue, setMethodValue] = useState("");

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
        const { data } = await axios
          .get(`https://api.aladhan.com/v1/calendarByCity`, request)
          .then(
            (currentTimesOfTheDateClicked) => currentTimesOfTheDateClicked.data
          );
        setCalendar(data);
      }, 1000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [city, country, methodValue]);*/

  const [acutalMonth, setActualMonth] = useState(
    new Date(Date.now()).toLocaleString(undefined, {
      month: "long",
    })
  );
  const [mediaSize, setMediaSize] = useState("");
  const [mediaChangeInMobileOrTablet, setMediaChangeInMobileOrTablet] =
    useState(false);

  useEffect(() => {
    let timer = setInterval(() => {
      setMediaSize(window.innerWidth <= 800 ? true : false);
    });

    return () => clearInterval(timer);
  });

  useEffect(() => {
    if (mediaSize) {
      setMediaChangeInMobileOrTablet(true);
    } else {
      setMediaChangeInMobileOrTablet(false);
      setDisplayTimesOfTheDateClicked(false);
      setClickedDisplayInfosMonth(false);
    }
  }, [mediaSize]);

  const [displayTimesOfTheDateClicked, setDisplayTimesOfTheDateClicked] =
    useState(false);

  const [currentTimesOfTheDateClicked, setCurrentTimesOfTheDateClicked] =
    useState("");

  const displayTimesOfTheDate = (id) => {
    if (mediaChangeInMobileOrTablet === true) {
      setDisplayTimesOfTheDateClicked(true);
      setCurrentTimesOfTheDateClicked(id);
    }
  };

  const closeTimesOfTheDate = () => {
    setDisplayTimesOfTheDateClicked(false);
    setCurrentTimesOfTheDateClicked("");
  };

  const [now, setNow] = useState(new Date().setHours(0, 0, 0, 0));

  const [clickedDisplayInfosMonth, setClickedDisplayInfosMonth] =
    useState(false);

  const displayInfosMonth = () => {
    setClickedDisplayInfosMonth(true);
  };

  const closeDisplayInfosMonth = () => {
    setClickedDisplayInfosMonth(false);
  };
  return (
    <>
      {displayTimesOfTheDateClicked ? (
        <div
          style={{
            background: "rgba(255,255,255,0.8)",
            width: "100%",
            height: "100%",
            top: "0",
            position: "fixed",
          }}
        >
          <div style={{ color: "black" }}>
            <button className="closeTimesOfDates" onClick={closeTimesOfTheDate}>
              <i className="fas fa-times-circle"></i>
            </button>
            <div className="containerCurrentTimesClicked">
              <ul className="ClickedTimesList__ul-times-list">
                <li className="ClickedTimesList__ul-times-list__li-date">
                  {currentTimesOfTheDateClicked.date.gregorian.date}
                </li>
                <li className="ClickedTimesList__ul-times-list__li-date">
                  {currentTimesOfTheDateClicked.date.hijri.date}
                </li>
                <li
                  className={
                    now >
                    new Date(
                      `${currentTimesOfTheDateClicked.date.gregorian.month.en} ${currentTimesOfTheDateClicked.date.gregorian.day}, ${currentTimesOfTheDateClicked.date.gregorian.year} 00:00:00`
                    )
                      ? "ClickedTimesList__ul-times-list__li-passed"
                      : now ===
                        new Date(
                          `${currentTimesOfTheDateClicked.date.gregorian.month.en} ${currentTimesOfTheDateClicked.date.gregorian.day}, ${currentTimesOfTheDateClicked.date.gregorian.year} 00:00:00`
                        ).setHours(0, 0, 0, 0)
                      ? "ClickedTimesList__ul-times-list__li-today"
                      : "ClickedTimesList__ul-times-list__li-normal"
                  }
                >
                  FAJR {currentTimesOfTheDateClicked.timings.Fajr.substr(0, 6)}{" "}
                  - SHOUROUQ{" "}
                  {currentTimesOfTheDateClicked.timings.Sunrise.substr(0, 6)}
                </li>
                <li
                  className={
                    now >
                    new Date(
                      `${currentTimesOfTheDateClicked.date.gregorian.month.en} ${currentTimesOfTheDateClicked.date.gregorian.day}, ${currentTimesOfTheDateClicked.date.gregorian.year} 00:00:00`
                    )
                      ? "ClickedTimesList__ul-times-list__li-passed"
                      : now ===
                        new Date(
                          `${currentTimesOfTheDateClicked.date.gregorian.month.en} ${currentTimesOfTheDateClicked.date.gregorian.day}, ${currentTimesOfTheDateClicked.date.gregorian.year} 00:00:00`
                        ).setHours(0, 0, 0, 0)
                      ? "ClickedTimesList__ul-times-list__li-today"
                      : "ClickedTimesList__ul-times-list__li-normal"
                  }
                >
                  DHOHR{" "}
                  {currentTimesOfTheDateClicked.timings.Dhuhr.substr(0, 6)}
                </li>
                <li
                  className={
                    now >
                    new Date(
                      `${currentTimesOfTheDateClicked.date.gregorian.month.en} ${currentTimesOfTheDateClicked.date.gregorian.day}, ${currentTimesOfTheDateClicked.date.gregorian.year} 00:00:00`
                    )
                      ? "ClickedTimesList__ul-times-list__li-passed"
                      : now ===
                        new Date(
                          `${currentTimesOfTheDateClicked.date.gregorian.month.en} ${currentTimesOfTheDateClicked.date.gregorian.day}, ${currentTimesOfTheDateClicked.date.gregorian.year} 00:00:00`
                        ).setHours(0, 0, 0, 0)
                      ? "ClickedTimesList__ul-times-list__li-today"
                      : "ClickedTimesList__ul-times-list__li-normal"
                  }
                >
                  ASR {currentTimesOfTheDateClicked.timings.Asr.substr(0, 6)}
                </li>
                <li
                  className={
                    now >
                    new Date(
                      `${currentTimesOfTheDateClicked.date.gregorian.month.en} ${currentTimesOfTheDateClicked.date.gregorian.day}, ${currentTimesOfTheDateClicked.date.gregorian.year} 00:00:00`
                    )
                      ? "ClickedTimesList__ul-times-list__li-passed"
                      : now ===
                        new Date(
                          `${currentTimesOfTheDateClicked.date.gregorian.month.en} ${currentTimesOfTheDateClicked.date.gregorian.day}, ${currentTimesOfTheDateClicked.date.gregorian.year} 00:00:00`
                        ).setHours(0, 0, 0, 0)
                      ? "ClickedTimesList__ul-times-list__li-today"
                      : "ClickedTimesList__ul-times-list__li-normal"
                  }
                >
                  MAGHREB{" "}
                  {currentTimesOfTheDateClicked.timings.Maghrib.substr(0, 6)}
                </li>
                <li
                  className={
                    now >
                    new Date(
                      `${currentTimesOfTheDateClicked.date.gregorian.month.en} ${currentTimesOfTheDateClicked.date.gregorian.day}, ${currentTimesOfTheDateClicked.date.gregorian.year} 00:00:00`
                    )
                      ? "ClickedTimesList__ul-times-list__li-passed"
                      : now ===
                        new Date(
                          `${currentTimesOfTheDateClicked.date.gregorian.month.en} ${currentTimesOfTheDateClicked.date.gregorian.day}, ${currentTimesOfTheDateClicked.date.gregorian.year} 00:00:00`
                        ).setHours(0, 0, 0, 0)
                      ? "ClickedTimesList__ul-times-list__li-today"
                      : "ClickedTimesList__ul-times-list__li-normal"
                  }
                >
                  ICHA {currentTimesOfTheDateClicked.timings.Isha.substr(0, 6)}{" "}
                  - MI-NUIT{" "}
                  <CalculMidnightCalendar
                    fajrTimeCalendar={currentTimesOfTheDateClicked.timings.Fajr.substr(
                      0,
                      6
                    )}
                    maghrebTimeCalendar={currentTimesOfTheDateClicked.timings.Maghrib.substr(
                      0,
                      6
                    )}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : clickedDisplayInfosMonth ? (
        <div
          style={{
            background: "rgba(255,255,255,0.8)",
            width: "100%",
            height: "100%",
            top: "0",
            position: "absolute",
          }}
        >
          {" "}
          <button className="closeInfosMonth" onClick={closeDisplayInfosMonth}>
            <i className="fas fa-times-circle"></i>
          </button>
          <div className="infos-hijri-month-container">
            <p>
              La date hégirienne n’est qu’à titre informative. Il faut s’en
              tenir aux annonces des organismes officiels et compétents pour
              avoir la date exacte à chaque entrée de mois.
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="calendar">
        <div className="calendar-container-month-degreeSeclect">
          <div>
            <h2 className="calendar-title-month">
              {acutalMonth.charAt(0).toUpperCase() + acutalMonth.slice(1)}{" "}
              <span
                onClick={displayInfosMonth}
                className="calendar-span-infos-month"
              >
                {" "}
                <i className="fas fa-info-circle info-icons-calendar"></i>
              </span>
            </h2>
          </div>
          <div className="Calendar__div-container-span-select">
            <span style={{ fontSize: "10px", color: "#605b56" }}>
            <i className="fas fa-map-marker-alt localisation-marker-pannel"></i>{" "}

              {city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()},{" "}
              {country.charAt(0).toUpperCase() + country.slice(1).toLowerCase()}
              <br></br>
              Angle :{" "}
              {selectedMethodStringValue === "" ||
              selectedMethodStringValue === "Sélectionner un angle"
                ? "Amérique du Nord (15°)"
                : selectedMethodStringValue}
            </span>

            <select onChange={getAngleOptionValue}>
              {method.map((currentTimesOfTheDateClicked, index) => (
                <option key={index} value={currentTimesOfTheDateClicked.value}>
                  {currentTimesOfTheDateClicked.stringValue}
                </option>
              ))}
            </select>
          </div>
        </div>

        <table>
          <thead className="thead-name-of-times">
            <tr className="name-of-times-list">
              <td>Date</td>
              <td>Date hégirienne</td>
              <td>Fajr</td>
              <td>Shourouq</td>
              <td>Dhor</td>
              <td>Asr</td>
              <td>Maghreb</td>
              <td>Icha</td>
              <td>Mi-nuit</td>
            </tr>
          </thead>
          <RowList
            calendar={calendar}
            displayTimesOfTheDateClicked={displayTimesOfTheDateClicked}
            displayTimesOfTheDate={displayTimesOfTheDate}
            mediaChangeInMobileOrTablet={mediaChangeInMobileOrTablet}
            mediaSize={mediaSize}
          />
        </table>
      </div>
    </>
  );
};
