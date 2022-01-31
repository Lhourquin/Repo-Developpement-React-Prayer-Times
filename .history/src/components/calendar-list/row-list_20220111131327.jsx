import React from "react";
import "./row-list.css"

export const RowList = (props) => {
  console.log(props);
  return (
    <div>
     {props.children}
    </div>
  );
};
