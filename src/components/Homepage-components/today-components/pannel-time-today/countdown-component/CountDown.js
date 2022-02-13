import React, { useState, useEffect, useRef } from "react";

export const CountDown = ({ nextTimes, day, month, year }) => {
  //const [dayNumber, setDay] = useState("");
  // const [yearNumber, setYear] = useState("");
  //const [monthString, setMonth] = useState("");
  const [midnightData, setMidnightData] = useState("");
  const [currentTime, setCurentTime] = useState("");
  const [currentCountdownTimes, setCurentCountdownTimes] = useState("");
  const [timerDays, setTimerDays] = useState("");
  const [timerHours, setTimerHours] = useState("");
  const [timerMinutes, setTimerMinutes] = useState("");
  const [timerSeconds, setTimerSeconds] = useState("");
  const [fajrTime, setFajrTime] = useState("");
  const [shourouqTime, setShourouqTime] = useState("");
  const [dhohrTime, setDhohrTime] = useState("");
  const [asrTime, setAsrTime] = useState("");
  const [maghrebTime, setMaghrebTime] = useState("");
  const [ichaTime, setIchaTime] = useState("");
  const [midnightTimeWithOldDate, setMidnightTimeWithOldDate] = useState("");
  const [midnightTime, setMidnightTime] = useState("");
  const [startDayMidgnith, setStartDayMidgnith] = useState("");
  //function to get the correct date of midnight
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
        `${monthOfTheTodayTimes} ${(
          Number(dayOfTimes) + 1
        ).toString()}, ${yearOfTimes} ${middleOfNight}:00`
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
  let intervalCountDown = useRef();

  /* const startCurrentTime = (salat, nextSalat) => {
    let now = new Date(Date.now()).getTime();

    if (salat < nextSalat) {
      setCurentTime(salat);
    }
  };*/

  const startTimerCountDown = (salat) => {
    let countDownTimes = salat.getTime();

    intervalCountDown = setInterval(() => {
      let now = new Date(Date.now()).getTime();
      let distance = countDownTimes - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(intervalCountDown.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours < 10 ? ("0" + hours).slice(-2) : hours);
        setTimerMinutes(minutes < 10 ? ("0" + minutes).slice(-2) : minutes);
        setTimerSeconds(seconds < 10 ? ("0" + seconds).slice(-2) : seconds);
      }
    });
  };

  const getTextContent = () => {
    setMidnightData(document.getElementsByClassName("test")[0].innerHTML);
  };

  useEffect(() => {
    if (nextTimes) {
      let timer = setTimeout(() => {
        getTextContent();
        setFajrTime(
          new Date(`${month} ${Number(day)}, ${year} ${nextTimes[0].fajr}:00`)
        );
        setShourouqTime(
          new Date(
            `${month} ${Number(day)}, ${year} ${nextTimes[1].shourouq}:00`
          )
        );
        setDhohrTime(
          new Date(`${month} ${Number(day)}, ${year} ${nextTimes[2].dhohr}:00`)
        );
        setAsrTime(
          new Date(`${month} ${Number(day)}, ${year} ${nextTimes[3].asr}:00`)
        );
        setMaghrebTime(
          new Date(
            `${month} ${Number(day)}, ${year} ${nextTimes[4].maghreb}:00`
          )
        );
        setIchaTime(
          new Date(`${month} ${Number(day)}, ${year} ${nextTimes[5].icha}:00`)
        );
        setStartDayMidgnith(
          new Date(`${month} ${Number(day) + 1}, ${year} 00:00:00`)
        );
        setMidnightTimeWithOldDate(
          new Date(`${month} ${Number(day)}, ${year} ${midnightData}:00`)
        );
      });
      return () => {
        clearTimeout(timer);
      };
    }
  }, [nextTimes]);

  useEffect(() => {
    if (
      midnightData &&
      fajrTime &&
      shourouqTime &&
      dhohrTime &&
      asrTime &&
      maghrebTime &&
      ichaTime &&
      startDayMidgnith
    ) {

      let timer = setTimeout(()=> {
        setMidnightTime(
          getTheCorrectDateMidnight(ichaTime, midnightData, month, day, year)
        );
        const now = new Date(Date.now()).getTime();
  
        if (fajrTime > now && fajrTime > midnightTimeWithOldDate) {
      
          setCurentTime("FAJR");
         
        } else if (fajrTime < now && fajrTime < shourouqTime) {
          setCurentTime("FAJR");
        } else if (shourouqTime > now && shourouqTime < dhohrTime) {
          setCurentTime("SHOUROUQ"); 
  
          
        } else if (dhohrTime > now && dhohrTime < asrTime) {
          setCurentTime("DHOHR");
        } else if (asrTime > now && asrTime < maghrebTime) {
          setCurentTime("ASR");
        } else if (maghrebTime > now && maghrebTime < ichaTime) {
          setCurentTime("MAGHREB");
        } else if (ichaTime > now && ichaTime < midnightTime) {
          setCurentTime("ICHA");
        }
  
        if (now < fajrTime) {
          startTimerCountDown(fajrTime);
          setCurentCountdownTimes("FAJR");
        } else if (now > fajrTime && now < shourouqTime) {
          startTimerCountDown(shourouqTime);
          setCurentCountdownTimes("SHOUROUQ");
        } else if (now > shourouqTime && now < dhohrTime) {
          startTimerCountDown(dhohrTime);
          setCurentCountdownTimes("DHOHR");
        } else if (now > dhohrTime && now < asrTime) {
          startTimerCountDown(asrTime);
          setCurentCountdownTimes("ASR");
        } else if (now > asrTime && now < maghrebTime) {
          startTimerCountDown(maghrebTime);
          setCurentCountdownTimes("MAGHREB");
        } else if (now > maghrebTime && now < ichaTime) {
          startTimerCountDown(ichaTime);
          setCurentCountdownTimes("ICHA");
        }
        // getNextTimes(fajrTime, "FAJR" , nextTimes[0].fajr, shourouqTime )
        // startTimerCountDown(fajrTime);
      })
    

      return () => {
        clearTimeout(timer);
        clearInterval(intervalCountDown.current);
      };
    }
  }, [
    midnightData,
    fajrTime,
    shourouqTime,
    dhohrTime,
    asrTime,
    maghrebTime,
    ichaTime,
    startDayMidgnith,
    midnightTimeWithOldDate,
  ]);
  // console.log(midnightTime)
  //console.log(currentTime)
  //console.log(new Date(Date.now()).getTime() < fajrTime)
  return (
    <>
      <li className="Pannel__ul--hour-date-countdown__li--countdown-current-times">
        {" "}
        {currentTime} {nextTimes[0].fajr} 
       
      </li>
      <li className="Pannel__ul--hour-date-countdown__li--countdown-next-times">
        {currentCountdownTimes} {nextTimes[1].shourouq} - {timerHours}:
        {timerMinutes}:{timerSeconds}
      </li>
    </>
  );
};
