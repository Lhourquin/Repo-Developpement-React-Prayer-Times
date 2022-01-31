import React from "react";
import "./searchbar.css";

export const SearchBar = ({ handleChange }) => {
  return (
    <form>
      <div>
        <button>Paramettre</button>
      </div>
      <div>
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
        <button>Localisation</button>
      </div>

      <button>Search</button>
    </form>
  );
};
