import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import "./Today.css";
import { TodayTimesList } from "./today-time-list/TodayTimesList";
import { Pannel } from "./pannel-time-today/Pannel";

export const Today = ({
  city,
  country,
  getAngleOptionValue,
  method,
  selectedMethodStringValue,
}) => {
  const [today, setToday] = useState([]);
  const [inputCity, setInputCity] = useState("");
  const [lastCity, setLastCity] = useState("");
  const [now, setNow] = useState(new Date(Date.now()).getTime());
  //console.log(dateIcha)
  useEffect(() => {
    let interval = setInterval(() => {
      setNow(new Date(Date.now()).getTime());
    });

    return () => clearInterval(interval);
  });

  useEffect(() => {
    let timer = setTimeout(() => {
      setToday(JSON.parse(localStorage.getItem("TodayTimes") || "[]"));

      if (city !== "" && country !== "") {
        setInputCity(city);
      } else if (city == "") {
        if (localStorage.getItem("City")) {
          setLastCity(localStorage.getItem("City"));
        }
      }
    });

    return () => clearTimeout(timer);
  }, [now]);

  const [dateFajr, setDateFajr] = useState();
  const [dateShourouq, setDateShourouq] = useState("");
  const [dateDhohr, setDateDhohr] = useState("");
  const [dateAsr, setDateAsr] = useState("");
  const [dateMaghreb, setDateMaghreb] = useState("");
  const [dateIcha, setDateIcha] = useState("");
  const [dateMidnight, setDateMidnight] = useState("");
  const [dateStartOfTheNextDay, setdateStartOfTheNextDay] = useState("");

  const [fajrTime, setFajrTime] = useState("");
  const [maghrebTime, setMaghrebTime] = useState("");

  useEffect(() => {
    today.map((obj) => {
      setDateFajr(
        new Date(
          `${obj.data.date.gregorian.month.en} ${obj.data.date.gregorian.day}, ${obj.data.date.gregorian.year} ${obj.data.timings.Fajr}:00`
        )
        /* { ${obj.data.timings.Fajr} }
         */
      );
      setDateShourouq(
        new Date(
          `${obj.data.date.gregorian.month.en} ${obj.data.date.gregorian.day}, ${obj.data.date.gregorian.year} ${obj.data.timings.Sunrise}:00` /**${obj.data.timings.Sunrise} */
        )
      );
      setDateDhohr(
        new Date(
          `${obj.data.date.gregorian.month.en} ${obj.data.date.gregorian.day}, ${obj.data.date.gregorian.year} ${obj.data.timings.Dhuhr}:00` /**${obj.data.timings.Dhuhr} */
        )
      );
      setDateAsr(
        new Date(
          `${obj.data.date.gregorian.month.en} ${obj.data.date.gregorian.day}, ${obj.data.date.gregorian.year} :00` /**${obj.data.timings.Asr} */
        )
      );
      setDateMaghreb(
        new Date(
          `${obj.data.date.gregorian.month.en} ${obj.data.date.gregorian.day}, ${obj.data.date.gregorian.year} :00` /**${obj.data.timings.Maghrib} */
        )
      );
      setDateIcha(
        new Date(
          `${obj.data.date.gregorian.month.en} ${obj.data.date.gregorian.day}, ${obj.data.date.gregorian.year} :00` /** ${obj.data.date.gregorian.year */
        )
      );
      setdateStartOfTheNextDay(
        new Date(`${obj.data.date.gregorian.month.en} (Number(${obj.data.date.gregorian.day}) + 1 ), ${obj.data.date.gregorian.year} 00:00:00`)
      );
      setFajrTime(
        obj.data.timings.Fajr.split(":").map((x) => {
          let strToNumber = Number(x);
          return strToNumber;
        })
      );
      setMaghrebTime(
        obj.data.timings.Maghrib.split(":").map((x) => {
          let strToNumber = Number(x);
          return strToNumber;
        })
      );
    });
  }, [today]);

  /* useEffect(() => {
    today.map((obj) => {
      
    });
  }, today);*/
  const [midnightTime, setMidnightTime] = useState("");

  useEffect(() => {
    setMidnightTime(() => {
      let fajr = moment(fajrTime, "HH:mm").add(1, "days");
      let maghreb = moment(maghrebTime, "HH:mm");

      let milliseconds = moment(fajr, "DD/MM/YYYY HH:mm:ss").diff(
        moment(maghreb, "DD/MM/YYYY HH:mm:ss")
      );
      let duration = moment.duration(milliseconds / 2);

      let durationInHours = Math.floor(duration.asHours());
      let durationInMinutes = Math.floor(duration.minutes());
      let midnight = moment(maghreb)
        .add(durationInHours, "hours")
        .add(durationInMinutes, "minutes");
      let toStringMidnightMomentObj = moment(midnight).format();
      let arrayOfString = toStringMidnightMomentObj.split("T");
      arrayOfString.shift();
      let newArrayOfString = arrayOfString.toString().split("+");
      newArrayOfString.pop();
      let result = newArrayOfString.toString().split(":").slice(0, 2);
      return result.join(":").toString();
    });
  }, [fajrTime, maghrebTime]);



  useEffect(() => {
    let timer = setTimeout(() => {
      today.map((obj)=> {
        setDateMidnight(() => {
        if (
          dateIcha > dateStartOfTheNextDay ||
          dateIcha == dateStartOfTheNextDay
        ) {
         // localStorage.setItem("DateMidnight", JSON.stringify(new Date(`${month} ${Number(day)}, ${year} ${midnight}:00`) + ""))

          return new Date(`${obj.data.date.gregorian.month.en} ${obj.data.date.gregorian.day}, ${obj.data.date.gregorian.year} ${midnightTime}:00`);
        } else if (
          dateIcha < dateStartOfTheNextDay &&
          midnight.substring(0, 1) == "0"
        ) {
         // localStorage.setItem("DateMidnight", JSON.stringify(new Date(`${month} ${Number(day)}, ${year} ${midnight}:00`) + ""))

          return new Date(
            `${obj.data.date.gregorian.month.en} (Number(${obj.data.date.gregorian.day}) + 1 ), ${obj.data.date.gregorian.year} ${midnightTime}:00`
          );
        } else if (
          dateIcha < dateStartOfTheNextDay &&
          midnight.substring(0, 1) !== "0"
        ) {
         // localStorage.setItem("DateMidnight", JSON.stringify(new Date(`${month} ${Number(day)}, ${year} ${midnight}:00`) + ""))

          return new Date(`${obj.data.date.gregorian.month.en} ${obj.data.date.gregorian.day}, ${obj.data.date.gregorian.year}${midnightTime}:00`);
        }
      });
      })
      
    });

    return () => clearTimeout(timer);
  }, [midnightTime]);

  return (
    <>
      <div className="Today__div--container-list-pannel">
        <TodayTimesList
          today={today}
          now={now}
          dateFajr={dateFajr}
          dateShourouq={dateShourouq}
          dateDhohr={dateDhohr}
          dateAsr={dateAsr}
          dateMaghreb={dateMaghreb}
          dateIcha={dateIcha}
          dateMidnight={dateMidnight}
          midnightTime={midnightTime}
        />
        <Pannel
          today={today}
          searchField={city !== "" ? inputCity : lastCity}
          country={country}
          getAngleOptionValue={getAngleOptionValue}
          method={method}
          selectedMethodStringValue={selectedMethodStringValue}
          now={now}
          dateFajr={dateFajr}
          dateShourouq={dateShourouq}
          dateDhohr={dateDhohr}
          dateAsr={dateAsr}
          dateIcha={dateIcha}
          dateMaghreb={dateMaghreb}
          dateMidnight={dateMidnight}
          midnightTime={midnightTime}
        />
      </div>
    </>
  );
};
