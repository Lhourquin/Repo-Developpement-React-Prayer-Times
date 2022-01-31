import React from "react";

export const SearchBar = ({ handleChange }) => {
  return <input className="input-city"
                type="search" 
                placeholder="Enter Your city.." 
                onChange={handleChange}/>
};
