import React, { useState, useEffect } from "react";
export const Clock = () => {
  const [timeNow, setTimeNow] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    let interval = setInterval(() => {
      setTimeNow(new Date().toLocaleTimeString());
    });

    return () => clearInterval(interval);
  });
  //console.log(curentPrayerTimes);

  return (
    <>
      <li className="DateNow">{timeNow}</li>
    </>
  );
};
