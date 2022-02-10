import React, { useState, useEffect, useRef } from "react";

export const CountDown = ({ nextTimes, day, month, year }) => {
  const [dayNumber, setDay] = useState("");
  const [yearNumber, setYear] = useState("");
  const [monthString, setMonth] = useState("");
  const [midnightData, setMidnightData] = useState("");
  //const currentDate = new Date(Date.now()).getTime();

  const getTextContent = () => {
    // setMidnightData(()=> document.getElementsByClassName("test"));
    setMidnightData(document.getElementsByClassName("test")[0].innerHTML);
  };

  useEffect(() => {
    if (nextTimes) {
      let timer = setTimeout(() => {
        getTextContent();
      });
      console.log(midnightData);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [nextTimes]);

  useEffect(() => {
    if (midnightData) {
      //assignation variable
      let fajr = new Date(
        `${month} ${Number(day)}, ${year} ${nextTimes[0].fajr}:00`
      );
      let shourouq = new Date(
        `${month} ${Number(day)}, ${year} ${nextTimes[1].shourouq}:00`
      );
      let dhohr = new Date(
        `${month} ${Number(day)}, ${year} ${nextTimes[2].dhohr}:00`
      );
      let asr = new Date(
        `${month} ${Number(day)}, ${year} ${nextTimes[3].asr}:00`
      );
      let maghreb = new Date(
        `${month} ${Number(day)}, ${year} ${nextTimes[4].maghreb}:00`
      );
      let icha = new Date(
        `${month} ${Number(day)}, ${year} ${nextTimes[5].icha}:00`
      );
      let startDayMidgnith = new Date(
        `${month} ${Number(day) + 1}, ${year} 00:00:00`
      );

      const getTheCorrectDateMidnight = (
        isha,
        middleOfNight,
        monthOfTheTodayTimes,
        dayOfTimes,
        yearOfTimes
      ) => {
        if (isha > startDayMidgnith || isha == startDayMidgnith) {
          return new Date(
            `${monthOfTheTodayTimes} ${Number(
              dayOfTimes
            )}, ${yearOfTimes} ${middleOfNight}:00`
          );
        } else if (
          isha < startDayMidgnith &&
          middleOfNight.substring(0, 1) == "0"
        ) {
          return new Date(
            `${monthOfTheTodayTimes} ${
              Number(dayOfTimes) + 1
            }, ${yearOfTimes} ${middleOfNight}:00`
          );
        } else if (
          isha < startDayMidgnith &&
          middleOfNight.substring(0, 1) !== "0"
        ) {
          return new Date(
            `${monthOfTheTodayTimes} ${Number(
              dayOfTimes
            )}, ${yearOfTimes} ${middleOfNight}:00`
          );
        }
      };

      let midnight = getTheCorrectDateMidnight(
        icha,
        midnightData,
        month,
        day,
        year
      );

      //console log test variable to check if it's good date
      console.log("fajr : " + fajr);
      console.log("shourouq : " + shourouq);
      console.log("dhohr : " + dhohr);
      console.log("asr : " + asr);
      console.log("maghreb : " + maghreb);
      console.log("icha : " + icha);
      console.log("midnight : " + midnight);
    }
  }, [midnightData]);

  /*let countDownNextTimes = new Date(
    `${month} ${day}, ${year} ${midnightData}:00`
  ).toLocaleTimeString();*/
  // let midnight = document.getElementsByClassName("test").textContent;

  //let interval = useRef();

  console.log("midnightData : " + midnightData);
  return (
    <>
      <span>{midnightData}</span>
    </>
  );
};
