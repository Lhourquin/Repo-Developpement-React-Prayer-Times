import React from "react";
import "./horaireslist.css"
export const HorairesList = (props) => {
    //console.log(props.map(x=> x.data.data.timings.Fajr))
  return (
    <div>
      { 
      
      

       
      props.today.map((obj, idx) => (
        <div key={idx}>
          <div> {obj.data.date.gregorian.date}</div>
          <div>{obj.data.timings.Fajr}</div>
          <div>{obj.data.timings.Sunrise}</div>
          <div>{obj.data.timings.Dhuhr}</div>
          <div>{obj.data.timings.Asr}</div>
          <div>{obj.data.timings.Maghrib}</div>
          <div>{obj.data.timings.Isha.substr}</div>
        </div>
      ))}
    </div>
  );
};
