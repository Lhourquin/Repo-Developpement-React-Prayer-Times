import React from "react";
import "./horaireslist.css"
export const HorairesList = (props) => {
    //console.log(props.map(x=> x.data.data.timings.Fajr))
  return (
    <div>
      { 
      
      

       
      props.today.map((obj, idx) => (
        <div key={idx}>
          <p> {obj.data.date.gregorian.date}</p>
          <p>{obj.data.timings.Fajr}</p>
          <p>{obj.data.timings.Sunrise}</p>
          <p>{obj.data.timings.Dhuhr}</p>
          <p>{obj.data.timings.Asr}</p>
          <p>{obj.data.timings.Maghrib}</p>
          <p>{obj.data.timings.Isha.substr}</p>
        </div>
      ))}
    </div>
  );
};
