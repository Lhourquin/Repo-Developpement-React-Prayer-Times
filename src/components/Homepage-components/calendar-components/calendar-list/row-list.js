import React, { useState, useEffect } from "react";
import "./row-list.css";
import { CalculMidnightCalendar } from "../calcul-mignight-calendar/CalculMidnightCalandar";
import "./row-list.css";

export const RowList = ({ calendar }) => {
  let count = 1;
  let date = new Date(Date.now());
  const dayDate = date.getDay();
  const [now, setNow] = useState(new Date().setHours(0, 0, 0, 0));
  const [mediaSize, setMediaSize] = useState("");
  const [mediaChangeInMobileOrTablet, setMediaChangeInMobileOrTablet] =
    useState(false);

  useEffect(() => {
    let timer = setInterval(() => {
      setMediaSize(window.innerWidth <= 620 ? true : false);
    }, 500);

    return () => clearInterval(timer);
  });

  useEffect(() => {
    if (mediaSize) {
      //console.log("mobile and tablet size");

      setMediaChangeInMobileOrTablet(true);
    } else {
      // console.log("desktop size");
      setMediaChangeInMobileOrTablet(false);
      setDisplayTimesOfTheDateClicked(false);
    }
  }, [mediaSize]);
  // console.log("mediaChangeInMobileOrTablet " + mediaChangeInMobileOrTablet);

  const [displayTimesOfTheDateClicked, setDisplayTimesOfTheDateClicked] =
    useState(false);

  const displayTimesOfTheDate = () => {
    if (mediaChangeInMobileOrTablet === true) {
      setDisplayTimesOfTheDateClicked(true);
    }
  };
  console.log("displayTimesOfTheDateClicked " + displayTimesOfTheDateClicked);
  return (
    <>
      {
        displayTimesOfTheDateClicked ? (
          <div></div>

        ) : ""
      }
      <tbody className="salat-of-month ">
        {calendar.map((obj, index) => (
          <tr
            className={
              now >
              new Date(
                `${obj.date.gregorian.month.en} ${obj.date.gregorian.day}, ${obj.date.gregorian.year} 00:00:00`
              )
                ? "container-horaires-list-passed"
                : now ===
                  new Date(
                    `${obj.date.gregorian.month.en} ${obj.date.gregorian.day}, ${obj.date.gregorian.year} 00:00:00`
                  ).setHours(0, 0, 0, 0)
                ? "container-horaires-list-today"
                : "container-horaires-list-normal"
            }
            key={index}
            onClick={displayTimesOfTheDate}
          >
            <td className="count">{count++}</td>
            {/*console.log(obj.date.gregorian.month.en  + " " + obj.date.gregorian.day + " " + obj.date.gregorian.year)*/}

            <td className="">{obj.date.gregorian.date}</td>
            <td className="">{obj.date.hijri.date}</td>
            <td className="td-list-times">{obj.timings.Fajr.substr(0, 6)}</td>
            <td className="td-list-times">
              {obj.timings.Sunrise.substr(0, 6)}
            </td>
            <td className="td-list-times">{obj.timings.Dhuhr.substr(0, 6)}</td>
            <td className="td-list-times">{obj.timings.Asr.substr(0, 6)}</td>
            <td className="td-list-times">
              {obj.timings.Maghrib.substr(0, 6)}
            </td>
            <td className="td-list-times">{obj.timings.Isha.substr(0, 6)}</td>
            <td className="td-list-times">
              <CalculMidnightCalendar
                fajrTimeCalendar={obj.timings.Fajr.substr(0, 6)}
                maghrebTimeCalendar={obj.timings.Maghrib.substr(0, 6)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
};
