import React from "react";
import "./row-list.css"

export const RowList = (props) => {
  console.log(props);
  return (
    <div className="salat-of-month ">
     {props.children}
    </div>
  );
};
