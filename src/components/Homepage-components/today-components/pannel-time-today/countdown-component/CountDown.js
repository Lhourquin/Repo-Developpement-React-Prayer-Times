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
  const [fajr, setFajr] = useState("");
  const [shourouq, setShourouq] = useState("");
  const [dhohr, setDhohr] = useState("");
  const [asr, setAsr] = useState("");
  const [maghreb, setMaghreb] = useState("");
  const [icha, setIcha] = useState("");
  let intervalCountDown = useRef();

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

  const startTimerCountDown = (salat) => {
    let countDownTimes = salat.getTime();

    intervalCountDown.current = setInterval(() => {
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
      let setNextTimesData = setTimeout(() => {
        setFajr(nextTimes[0].fajr);
        setShourouq(nextTimes[1].shourouq);
        setDhohr(nextTimes[2].dhohr);
        setAsr(nextTimes[3].asr);
        setMaghreb(nextTimes[4].maghreb);
        setIcha(nextTimes[5].icha);
        // get the data of midnight in rowlist of today
        getTextContent();
      });

      return () => clearTimeout(setNextTimesData);
    }
  }, nextTimes);

  useEffect(() => {
    if (
      fajr &&
      shourouq &&
      dhohr &&
      asr &&
      maghreb &&
      icha &&
      midnightData &&
      month &&
      day &&
      year
    ) {
      let nextTimesDataDateFormat = setTimeout(() => {
        setFajrTime(new Date(`${month} ${Number(day)}, ${year} ${fajr}:00`));
        setShourouqTime(
          new Date(`${month} ${Number(day)}, ${year} ${shourouq}:00`)
        );
        setDhohrTime(new Date(`${month} ${Number(day)}, ${year} ${dhohr}:00`));
        setAsrTime(new Date(`${month} ${Number(day)}, ${year} ${asr}:00`));
        setMaghrebTime(
          new Date(`${month} ${Number(day)}, ${year} ${maghreb}:00`)
        );
        setIchaTime(new Date(`${month} ${Number(day)}, ${year} ${icha}:00`));
        setStartDayMidgnith(
          new Date(`${month} ${Number(day) + 1}, ${year} 00:00:00`)
        );
        setMidnightTimeWithOldDate(
          new Date(`${month} ${Number(day)}, ${year} ${midnightData}:00`)
        );
      });
      return () => {
        clearTimeout(nextTimesDataDateFormat);
      };
    }
  }, [
    fajr,
    shourouq,
    dhohr,
    asr,
    maghreb,
    icha,
    midnightData,
    month,
    day,
    year,
  ]);

  useEffect(() => {
    if (midnightData && ichaTime && month && day && year) {
      let timer = setTimeout(() => {
        setMidnightTime(
          getTheCorrectDateMidnight(ichaTime, midnightData, month, day, year)
        );
      });
      return () => {
        clearTimeout(timer);
      };
    }
  }, [midnightData, ichaTime, month, day, year]);

  useEffect(() => {
    if (
      fajrTime &&
      shourouqTime &&
      dhohrTime &&
      asrTime &&
      maghrebTime &&
      ichaTime &&
      midnightTimeWithOldDate &&
      midnightTime
    ) {
      let update = setTimeout(() => {
        const now = new Date(Date.now()).getTime();

        // current salat time
        if (fajrTime > now && fajrTime > midnightTimeWithOldDate) {
          setCurentTime("FAJR " + fajr);
        } else if (fajrTime < now && now < shourouqTime) {
          setCurentTime("FAJR " + fajr);
          console.log("test");
        } else if (shourouqTime > now && now < dhohrTime) {
          setCurentTime("SHOUROUQ " + shourouq);
          console.log("test shour");
        } else if (dhohrTime > now && now < asrTime) {
          setCurentTime("DHOHR " + dhohr);
          console.log("test dho");
        } else if (asrTime < now && now < maghrebTime) {
          setCurentTime("ASR " + asr);
          console.log("test");
        } else if (maghrebTime < now && now < ichaTime) {
          setCurentTime("MAGHREB " + maghreb);
        } else if (ichaTime < now && now < midnightTime) {
          setCurentTime("ICHA " + icha);
        }

        //countdoqn next salat
        if (now < midnightTimeWithOldDate && now < midnightTime) {
          startTimerCountDown(fajrTime);
          setCurentCountdownTimes("FAJR " + fajr);
        } else if (now > fajrTime && now < shourouqTime) {
          startTimerCountDown(shourouqTime);
          setCurentCountdownTimes("SHOUROUQ " + shourouq);
        } else if (now > shourouqTime && now < dhohrTime) {
          startTimerCountDown(dhohrTime);
          setCurentCountdownTimes("DHOHR " + dhohr);
        } else if (now > dhohrTime && now < asrTime) {
          startTimerCountDown(asrTime);
          setCurentCountdownTimes("ASR " + asr);
        } else if (now > asrTime && now < maghrebTime) {
          startTimerCountDown(maghrebTime);
          setCurentCountdownTimes("MAGHREB " + maghreb);
        } else if (now > maghrebTime && now < ichaTime) {
          startTimerCountDown(ichaTime);
          setCurentCountdownTimes("ICHA " + icha);
        } else if (now > ichaTime && now < midnightTime) {
          startTimerCountDown(midnightTime);
          setCurentCountdownTimes("MINUIT " + midnightData);
        }
      }, 1000);

      return () => {
        clearTimeout(update);
        clearInterval(intervalCountDown.current);
      };
    }
  }, [
    fajrTime,
    shourouqTime,
    dhohrTime,
    asrTime,
    maghrebTime,
    ichaTime,
    midnightTime,
    midnightTimeWithOldDate,
    fajr,
    shourouq,
    dhohr,
    asr,
    maghreb,
    icha,
    midnightData,
  ]);
  // console.log(maghrebTime)
  //console.log(currentTime)
  //console.log(new Date(Date.now()).getTime() < fajrTime)
  //console.log(midnightTimeWithOldDate)

  return (
    <>
      <li className="Pannel__ul--hour-date-countdown__li--countdown-current-times">
        {" "}
        {currentTime}
      </li>
      <li className="Pannel__ul--hour-date-countdown__li--countdown-next-times">
        {currentCountdownTimes} -{" "}
        {timerHours + ":" + timerMinutes + ":" + timerSeconds}
      </li>
    </>
  );
};
