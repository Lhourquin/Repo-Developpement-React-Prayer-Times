import React from "react";

export const HorairesList = (props) => {
    //console.log(props.map(x=> x.data.data.timings.Fajr))
  return (
    <div>
      { 
      
      

       
      props.today.map((obj, index) => (
        <tr key={index}>
          <td> {obj.data.date.gregorian.date}</td>
          <td>{obj.data.timings.Fajr}</td>
          <td>{obj.data.timings.Sunrise}</td>
          <td>{obj.data.timings.Dhuhr}</td>
          <td>{obj.data.timings.Asr}</td>
          <td>{obj.data.timings.Maghrib}</td>
          <td>{obj.data.timings.Isha.substr}</td>
        </tr>
      ))}
    </div>
  );
};
