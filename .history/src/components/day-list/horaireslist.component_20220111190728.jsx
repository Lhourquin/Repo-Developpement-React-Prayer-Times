import React from "react";
import "./horaireslist.css"
export const HorairesList = (props) => {
    //console.log(props.map(x=> x.data.data.timings.Fajr))
  return (
    <div>
      { 
      
      

       
      props.today.map((obj, idx) => (
        <div key={idx}>
          <h6> {obj.data.date.gregorian.date}</h6>
          <h6>{obj.data.timings.Fajr}</h6>
          <h6>{obj.data.timings.Sunrise}</h6>
          <h6>{obj.data.timings.Dhuhr}</h6>
          <h6>{obj.data.timings.Asr}</h6>
          <h6>{obj.data.timings.Maghrib}</h6>
          <h6>{obj.data.timings.Isha.substr}</h6>
        </div>
      ))}
    </div>
  );
};
