import React from "react";

export const SearchBar = ({ handleChange }) => {
  return <input type="search" 
                placeholder="Enter Your city.." 
                onChange={handleChange}/>
};
