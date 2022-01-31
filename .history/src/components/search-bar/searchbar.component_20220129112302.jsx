import React from "react";
import "./searchbar.css";

export const SearchBar = ({ handleChange }) => {
  return (
    <form className="SearchBar__form">
      <div className="SearchBar__form__div--container-parametter-degree">
      <div><i className="fa-solid fa-angle-90"></i>
        </div> 
      </div>
      <div className="SearchBar__form__div--container-inputCountry-inputCity-localisationButton">
        <input
          className="country"
          type="search"
          placeholder="Enter your country.."
        />
        <input
          className="city"
          type="search"
          placeholder="Enter Your city.."
          onChange={handleChange}
        />
        <button>L</button>
      </div>

      <button className="SearchBar__form__button--search">Search</button>
    </form>
  );
};
