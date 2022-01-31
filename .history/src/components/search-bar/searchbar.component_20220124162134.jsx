import React from "react";
import "./searchbar.css"

export const SearchBar = ({ handleChange }) => {
  return 
  <div>
    <input className="country"
           type="search"
           placeholder="Enter your country.."
          
    />
    <input className="input-city"
                type="search" 
                placeholder="Enter Your city.." 
                onChange={handleChange}/>
  </div>
  
};
