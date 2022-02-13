import React, { useState, useEffect, useRef } from "react";

export const CountDown = ({ nextTimes, day, month, year }) => {
  //const [dayNumber, setDay] = useState("");
  // const [yearNumber, setYear] = useState("");
  //const [monthString, setMonth] = useState("");
  const [midnightData, setMidnightData] = useState("");
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
  let interval = useRef();

  const startTimer = (salat) => {
    let countDownTimes = salat.getTime();
    

    interval = setInterval(() => {
      let now = new Date(Date.now()).getTime();
      let distance = countDownTimes - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours < 10 ? ("0" + hours).slice(-2) : hours);
        setTimerMinutes(minutes < 10 ? ("0" + minutes).slice(-2) : minutes);
        setTimerSeconds(
          seconds  < 10 ? ("0" + seconds).slice(-2) : seconds
        );
      }
    });
  };
  //function to get the next times after the actuel times

/*   const getNextTimes = (salat, string, hours, nextSalat) => {
    const now = new Date(Date.now()).getTime();

    if (now < salat) {
      setCurentCountdownTimes(string + " " + hours);
      startTimer(nextSalat);
    } else if (now > salat) {
      return;
     // console.log(salat);
    }
  };*/
  // const [curentDate, setCurentDate] = useState("");
  //const currentDate = new Date(Date.now()).getTime();
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
      // console.log("monter");
      //console.log("midnightData : " + midnightData);

      setMidnightTime(
        getTheCorrectDateMidnight(ichaTime, midnightData, month, day, year)
      );
      const now = new Date(Date.now()).getTime();

      if(now < fajrTime){
        startTimer(fajrTime);
        setCurentCountdownTimes("FAJR");
      }else if (now >= fajrTime && now <= shourouqTime){
        startTimer(shourouqTime);
        setCurentCountdownTimes("SHOUROUQ");
      }else if(now > shourouqTime && now < dhohrTime){
        startTimer(dhohrTime);
        setCurentCountdownTimes("DHOHR");
      }else if(now > dhohrTime && now < asrTime){
        startTimer(asrTime);
        setCurentCountdownTimes("ASR");
      }else if(now > asrTime && now < maghrebTime){
        startTimer(maghrebTime);
        setCurentCountdownTimes("MAGHREB");
      }else if(now > maghrebTime && now < ichaTime){
        startTimer(ichaTime);
        setCurentCountdownTimes("ICHA");
      }
     // getNextTimes(fajrTime, "FAJR" , nextTimes[0].fajr, shourouqTime )
     // startTimer(fajrTime);
        
      return () => {
        clearTimeout(interval);
        clearInterval(interval.current);
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
  ]);

  /*useEffect(() => {
    if(midnightTime){
      startTimer(fajrTime);
      return () => clearInterval(interval.current);
    }
  },[midnightTime]);*/

  /* useEffect(() => {
    if(timerDays && timerHours && timerMinutes && timerSeconds){
      console.log("monter")
    }

  }, [timerDays, timerHours, timerMinutes, timerSeconds])*/
  /*
  useEffect(() => {
    if (nextTimes && midnightData) {
      let timer = setInterval(() => {
        //assignation variable
       /* let fajr = new Date(
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

        let midnight = getTheCorrectDateMidnight(
          icha,
          midnightData,
          month,
          day,
          year
        );*/

  // getNextTimes(fajr, "SHOUROUQ");
  //  getNextTimes(dhohr, "ASR");
  // getNextTimes(asr, "MAGHREB");
  //  getNextTimes(maghreb, "ICHA" );
  // getNextTimes(icha, "MINUIT", midnightData, midnight);
  // getNextTimes(midnight, "Fajr", nextTimes[0].fajr, fajr);

  //   startTimer(fajr);

  // getNextTimes(midnight, "FAJR")

  //console log test variable to check if it's good date
  /* console.log("fajr : " + fajr);
        console.log("shourouq : " + shourouq);
        console.log("dhohr : " + dhohr);
        console.log("asr : " + asr);
        console.log("maghreb : " + maghreb);
        console.log("icha : " + icha);
        console.log("midnight : " + midnight);
        console.log("midnightData : " + midnightData);*/
  //   });

  /*    return () => {
        clearInterval(timer);
        clearInterval(interval.current);
     
      }*/
  //;
  /*    }
  }, [nextTimes, midnightData]);
  */

  /*let countDownNextTimes = new Date(
    `${month} ${day}, ${year} ${midnightData}:00`
  ).toLocaleTimeString();*/
  // let midnight = document.getElementsByClassName("test").textContent;

  //let interval = useRef();

  // console.log("curentDate : " + curentDate)
  // console.log("timerDays : " + timerDays)
  // console.log("timerHours : " + timerHours)
  //console.log("timerMinutes : " + timerMinutes);
  // console.log("type of timerSeconds : " + timerSeconds + " " + typeof(timerSeconds))
  //   console.log(currentCountdownTimes)
  //console.log("midnightTime : " + midnightTime);

  return (
    <>
      <span>
       {currentCountdownTimes} {nextTimes[0].fajr} - {timerHours}:{timerMinutes}:{timerSeconds}
      </span>
    </>
  );
};
