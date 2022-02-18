import React, { useState, useEffect, useRef } from "react";

export const Timer = ({ arrayOfTimesSalatOfTheDay, day, month, year }) => {
  const [fajr, setFajr] = useState(arrayOfTimesSalatOfTheDay[0].fajr);
  const [shourouq, setShourouq] = useState(
    arrayOfTimesSalatOfTheDay[1].shourouq
  );
  const [dhohr, setDhohr] = useState(arrayOfTimesSalatOfTheDay[2].dhohr);
  const [asr, setAsr] = useState(arrayOfTimesSalatOfTheDay[3].asr);
  const [maghreb, setMaghreb] = useState(arrayOfTimesSalatOfTheDay[4].maghreb);
  const [icha, setIcha] = useState(arrayOfTimesSalatOfTheDay[5].icha);
  const [midnight, setMidnight] = useState(
    arrayOfTimesSalatOfTheDay[6].midnight
  );

  const getTextContent = () => {
    return (arrayOfTimesSalatOfTheDay[6].midnight =
      document.getElementsByClassName("test")[0].innerHTML);
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      setFajr(arrayOfTimesSalatOfTheDay[0].fajr);
      setShourouq(arrayOfTimesSalatOfTheDay[1].shourouq);
      setDhohr(arrayOfTimesSalatOfTheDay[2].dhohr);
      setAsr(arrayOfTimesSalatOfTheDay[3].asr);
      setMaghreb(arrayOfTimesSalatOfTheDay[4].maghreb);
      setIcha(arrayOfTimesSalatOfTheDay[5].icha);
      setMidnight(getTextContent());
    });

    return () => clearTimeout(timer);
  }, arrayOfTimesSalatOfTheDay);

  const [dateFajr, setDateFajr] = useState(
    new Date(`${month} ${Number(day)}, ${year} ${fajr}:00`)
  );
  const [dateShourouq, setDateShourouq] = useState(
    new Date(`${month} ${Number(day)}, ${year} ${shourouq}:00`)
  );
  const [dateDhohr, setDateDhohr] = useState(
    new Date(`${month} ${Number(day)}, ${year} ${dhohr}:00`)
  );
  const [dateAsr, setDateAsr] = useState(
    new Date(`${month} ${Number(day)}, ${year} ${asr}:00`)
  );
  const [dateMaghreb, setDateMaghreb] = useState(
    new Date(`${month} ${Number(day)}, ${year} ${maghreb}:00`)
  );
  const [dateIcha, setDateIcha] = useState(
    new Date(`${month} ${Number(day)}, ${year} ${icha}:00`)
  );
  const [dateStartOfTheNextDay, setdateStartOfTheNextDay] = useState(
    new Date(`${month} ${Number(day) + 1}, ${year} 00:00:00`)
  );
  const [dateMidnight, setDateMidnight] = useState(() => {
    if (dateIcha > dateStartOfTheNextDay || dateIcha == dateStartOfTheNextDay) {
      return new Date(`${month} ${Number(day)}, ${year} ${midnight}:00`);
    } else if (
      dateIcha < dateStartOfTheNextDay &&
      midnight.substring(0, 1) == "0"
    ) {
      return new Date(
        `${month} ${(Number(day) + 1).toString()}, ${year} ${midnight}:00`
      );
    } else if (
      dateIcha < dateStartOfTheNextDay &&
      midnight.substring(0, 1) !== "0"
    ) {
      return new Date(`${month} ${Number(day)}, ${year} ${midnight}:00`);
    }
  });

  useEffect(() => {
    let timer = setTimeout(() => {
      setDateFajr(new Date(`${month} ${Number(day)}, ${year} ${fajr}:00`));
      setDateShourouq(
        new Date(`${month} ${Number(day)}, ${year} ${shourouq}:00`)
      );
      setDateDhohr(new Date(`${month} ${Number(day)}, ${year} ${dhohr}:00`));
      setDateAsr(new Date(`${month} ${Number(day)}, ${year} ${asr}:00`));
      setDateMaghreb(
        new Date(`${month} ${Number(day)}, ${year} ${maghreb}:00`)
      );
      setDateIcha(new Date(`${month} ${Number(day)}, ${year} ${icha}:00`));
      setDateMidnight(() => {
        if (
          dateIcha > dateStartOfTheNextDay ||
          dateIcha == dateStartOfTheNextDay
        ) {
          return new Date(`${month} ${Number(day)}, ${year} ${midnight}:00`);
        } else if (
          dateIcha < dateStartOfTheNextDay &&
          midnight.substring(0, 1) == "0"
        ) {
          return new Date(
            `${month} ${(Number(day) + 1).toString()}, ${year} ${midnight}:00`
          );
        } else if (
          dateIcha < dateStartOfTheNextDay &&
          midnight.substring(0, 1) !== "0"
        ) {
          return new Date(`${month} ${Number(day)}, ${year} ${midnight}:00`);
        }
      });
    });

    return () => clearTimeout(timer);
  }, [midnight]);

  // const [timerDays, setTimerDays] = useState("");
  const [timerHoursCurrentTime, setTimerHoursCurrentTime] = useState("");
  const [timerMinutesCurrentTime, setTimerMinutesCurrentTime] = useState("");
  const [timerSecondsCurrentTime, setTimerSecondsCurrentTime] = useState("");
  const [timerHoursNextTime, setTimerHoursNextTime] = useState("");
  const [timerMinutesNextTime, setTimerMinutesNextTime] = useState("");
  const [timerSecondsNextTime, setTimerSecondsNextTime] = useState("");

  let intervalCountDown = useRef();

  const startTimerNextTimeCountDown = (salat) => {
    let countDownTimes = salat.getTime();

    intervalCountDown.current = setInterval(() => {
      let now = new Date(Date.now()).getTime();
      let distance = countDownTimes - now;

      //  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(intervalCountDown.current);
      } else {
        // setTimerDays(days);

        setTimerHoursNextTime(hours < 10 ? ("0" + hours).slice(-2) : hours);
        setTimerMinutesNextTime(
          minutes < 10 ? ("0" + minutes).slice(-2) : minutes
        );
        setTimerSecondsNextTime(
          seconds < 10 ? ("0" + seconds).slice(-2) : seconds
        );
      }
    });
  };

  const startTimerCurrentCountDown = (salat) => {
    let countDownTimes = salat.getTime();

    intervalCountDown.current = setInterval(() => {
      let now = new Date(Date.now()).getTime();
      let distance = countDownTimes - now;

      //  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(intervalCountDown.current);
      } else {
        // setTimerDays(days);
        setTimerHoursCurrentTime(hours < 10 ? ("0" + hours).slice(-2) : hours);
        setTimerMinutesCurrentTime(
          minutes < 10 ? ("0" + minutes).slice(-2) : minutes
        );
        setTimerSecondsCurrentTime(
          seconds < 10 ? ("0" + seconds).slice(-2) : seconds
        );
      }
    });
  };

  const [currentNextTime, setCurrentNextTime] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  const [displayTimerCurrentNextTime, setDisplayTimerCurrentNextTime] =
    useState(false);
  const [displayTimerCurrentTime, setDisplayTimerCurrentTime] = useState(false);
  const [now, setNow] = useState(new Date(Date.now()).getTime());

  useEffect(() => {
    let interval = setInterval(() => {
      setNow(new Date(Date.now()).getTime());
    });

    return () => clearInterval(interval);
  });

  useEffect(() => {
    if (now < dateFajr) {
      setCurrentTime("FAJR " + fajr + " - ");
      startTimerCurrentCountDown(dateFajr);
      setDisplayTimerCurrentTime(true);
      setDisplayTimerCurrentNextTime(false);
      setCurrentNextTime("");
      return () => clearInterval(intervalCountDown.current);
    } else if (now >= dateFajr && now < dateShourouq) {
      setCurrentTime("FAJR " + fajr);
      setDisplayTimerCurrentTime(false);
      startTimerNextTimeCountDown(dateShourouq);
      setCurrentNextTime("SHOUROUQ " + shourouq + " - ");
      setDisplayTimerCurrentNextTime(true);
      return () => clearInterval(intervalCountDown.current);
    } else if (now > dateShourouq && now < dateDhohr) {
      startTimerCurrentCountDown(dateDhohr);
      setDisplayTimerCurrentTime(true);
      setDisplayTimerCurrentNextTime(false);
      setCurrentTime("DHOHR " + dhohr + " - ");
      setCurrentNextTime("");
      return () => clearInterval(intervalCountDown.current);
    } else if (now > dateDhohr && now < dateAsr) {
      setCurrentTime("DHOHR " + dhohr);
      startTimerNextTimeCountDown(dateAsr);
      setDisplayTimerCurrentTime(false);
      setDisplayTimerCurrentNextTime(true);
      setCurrentNextTime("ASR " + asr + " - ");
      return () => clearInterval(intervalCountDown.current);
    } else if (now > dateAsr && now < dateMaghreb) {
      setCurrentTime("ASR " + asr);
      startTimerNextTimeCountDown(dateMaghreb);
      setDisplayTimerCurrentTime(false);
      setDisplayTimerCurrentNextTime(true);
      setCurrentNextTime("MAGHREB " + maghreb + " - ");
      return () => clearInterval(intervalCountDown.current);
    } else if (now > dateMaghreb && now < dateIcha) {
      setCurrentTime("MAGHREB " + maghreb);
      startTimerNextTimeCountDown(dateIcha);
      setDisplayTimerCurrentTime(false);
      setDisplayTimerCurrentNextTime(true);
      setCurrentNextTime("ICHA " + icha + " - ");
      return () => clearInterval(intervalCountDown.current);
    } else if (now > dateIcha && now < dateMidnight) {
      setCurrentTime("ICHA " + icha);
      startTimerNextTimeCountDown(dateMidnight);
      setDisplayTimerCurrentTime(false);
      setDisplayTimerCurrentNextTime(true);
      setCurrentNextTime("MI-NUIT " + midnight + " - ");
      return () => clearInterval(intervalCountDown.current);
    }

    /*  console.log(" 1 : " + midnight);
    console.log(" 2 : " + dateFajr);
    console.log(" 3 : " + dateShourouq);
    console.log(" 4 : " + dateDhohr);
    console.log(" 5 : " + dateAsr);
    console.log(" 6 : " + dateMaghreb);
    console.log(" 7 : " + dateIcha);
    console.log(" 8 : " + dateMidnight);*/

  }, [now, midnight]);
  //console.log(timerHoursNextTime > 1)
  return (
    <>
      <li style={displayTimerCurrentTime === true ? {color : "#92BFEE"}: {}} className="Pannel__ul--hour-date-countdown__li--countdown-current-times">
        {currentTime}{" "}
        {displayTimerCurrentTime === true
          ? <span>{timerHoursCurrentTime +
            ":" +
            timerMinutesCurrentTime +
            ":" +
            timerSecondsCurrentTime}</span> 
          : ""}
      </li>
      <li className={(timerHoursNextTime == 0 && timerMinutesNextTime < 30 ? "countDowntThirtyMinutes"  : "Pannel__ul--hour-date-countdown__li--countdown-next-times ")}>
        {currentNextTime}{" "}
        {displayTimerCurrentNextTime === true
          ? timerHoursNextTime +
            ":" +
            timerMinutesNextTime +
            ":" +
            timerSecondsNextTime
          : ""}
      </li>
    </>
  );
};
