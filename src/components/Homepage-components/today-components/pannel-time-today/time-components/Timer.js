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

  useEffect(() => {
    console.log(" 1 : " + midnight);
    console.log(" 2 : " + dateFajr);
    console.log(" 3 : " + dateShourouq);
    console.log(" 4 : " + dateDhohr);
    console.log(" 5 : " + dateAsr);
    console.log(" 6 : " + dateMaghreb);
    console.log(" 7 : " + dateIcha);
    console.log(" 8 : " + dateMidnight);
  }, [dateMidnight]);

  const [timerDays, setTimerDays] = useState("");
  const [timerHours, setTimerHours] = useState("");
  const [timerMinutes, setTimerMinutes] = useState("");
  const [timerSeconds, setTimerSeconds] = useState("");

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

  // console.log(timerDays)
  // console.log(timerHours)
  // console.log(timerMinutes)
  //console.log(timerSeconds)

  return (
    <>
      <li className="Pannel__ul--hour-date-countdown__li--countdown-current-times">
        Current Times
      </li>
      <li className="Pannel__ul--hour-date-countdown__li--countdown-next-times">
        Next time
      </li>
    </>
  );
};
