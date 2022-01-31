import React from "react";
import "./horaireslist.css";
export const HorairesList = (props) => {
  //console.log(props.map(x=> x.data.data.timings.Fajr))
  return (
    <div>
      {props.today.map((obj, idx) => (
        <div>
          <p key={idx}> {obj.data.date.gregorian.date}</p>
          <p key={idx}>{obj.data.timings.Fajr}</p>
          <p key={idx}>{obj.data.timings.Sunrise}</p>
          <p key={idx}>{obj.data.timings.Dhuhr}</p>
          <p key={idx}>{obj.data.timings.Asr}</p>
          <p key={idx}>{obj.data.timings.Maghrib}</p>
          <p key={idx}>{obj.data.timings.Isha.substr}</p>
        </div>
      ))}
    </div>
  );
};
