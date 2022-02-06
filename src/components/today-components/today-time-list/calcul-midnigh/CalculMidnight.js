import React, { useState, useEffect } from "react";
import moment from "moment";

export const CalculMidnight = ({ todayMidnight }) => {
  const [midnightTime, setMidnightTime] = useState("");
  const [fajrTime, setFajrTime] = useState("");
  const [maghrebTime, setMaghrebTime] = useState("");
  useEffect(() => {
    todayMidnight.map((obj) => {
      setFajrTime(
        obj.data.timings.Fajr.split(":").map((x) => {
          let strToNumber = Number(x);
          let fajrHour = moment(strToNumber, "HH:mm").add(1, "days");
          return fajrHour;
        })
      );
      setMaghrebTime(
        obj.data.timings.Maghrib.split(":").map((x) => {
          let strToNumber = Number(x);
          return strToNumber;
        })
      );
    });
    setMidnightTime();
  }, todayMidnight);
  console.log(maghrebTime);
  console.log(fajrTime);

  return <span>Component</span>;
};
/**
 * let isha =
                obj.data.timings.Isha.split(":").map((x) => {
                  let strToNumber = Number(x);
                  return strToNumber;
                })*/
