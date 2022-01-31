import React from "react";
import "./row-list.css"

export const RowList = (props) => {
  console.log(props);
  return (
    <div className="card">
     {props.children}
    </div>
  );
};
