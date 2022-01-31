import React from "react";
import "./row-list.css";
import { Row } from "./row/row.component";

export const RowList = (props) => {
  console.log(props);
  return (
    <div className="salat-of-month ">
     {props.calendars.map((obj, index) => (
           <Row key={index} row={obj}/>
          ))}
    </div>
  );
};
