import React from "react";

export const Pannel = (props) => {
    return (
        <div>
        {props.today.map((obj, index) => (
          <div key={index}>
            <p>{obj.data.date.gregorian.date}</p>
            <p>{obj.data.timings.Fajr}</p>
            <p>{obj.data.timings.Sunrise}</p>
            <p>{obj.data.timings.Dhuhr}</p>
            <p>{obj.data.timings.Asr}</p>
            <p>{obj.data.timings.Maghrib}</p>
            <p>{obj.data.timings.Isha}</p>
          </div>
        ))}
      </div>
    )
}