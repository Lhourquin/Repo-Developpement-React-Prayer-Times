import React from "react";
import "./row-list.css"

export const RowList = (props) => {
  console.log(props);
  return (
    <div>
     {props.calandars.map((obj, index) => (
            <div key={index}>
              <table className="salat-of-month">
                <thead>
                  <tr>
                    <td>Date</td>
                    <td>Fajr</td>
                    <td>Shourouk</td>
                    <td>Dhor</td>
                    <td>Asr</td>
                    <td>Maghreb</td>
                    <td>Icha</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td> {props.obj.date.gregorian.date}</td>
                   
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
    </div>
  );
};
