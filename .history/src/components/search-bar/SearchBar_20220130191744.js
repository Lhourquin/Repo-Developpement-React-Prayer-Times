import React, { useState } from "react";
import "./searchbar.css";

export const SearchBar = ({ handleChange }) => {
  const [toggleInput, setToggleInput] = useState(true);

  const handleToggle = () => {
    console.log(toggleInput);
    setToggleInput(false);
  };

  const closeSearch = () => {
    setToggleInput(true);
  };

  return (
    <form className="SearchBar__form">
      {/*
      <div className="SearchBar__form__div--container-parametter-degree">
        <button className="SearchBar__form__div--container__button"><i className="fas fa-ruler-combined"></i></button>
      </div>
      */}
      <div className="SearchBar__form__div--find-city-container">
        <input
          className="SearchBar__form__div--find-city-container__input--city"
          type="text"
          name="city"
          placeholder={toggleInput ? "Trouvez votre ville" : "Votre ville"}
          onClick={handleToggle}
        />
        <button
          className="SearchBar__form__div--container__button"
          style={toggleInput ? {} : { display: "none" }}
        >
          <i className="fas fa-map-marker-alt localisation-marker"></i>
        </button>
      </div>

      <div className={"SearchBar__form__div--find-country-container " + (toggleInput ? "isClose" : " isOpen")}>
        <span className="cross" onClick={closeSearch}>
          ✖
        </span>
        <input
          className="SearchBar__form__div--find-country-container__input-country"
          type="text"
          name="country"
          placeholder="Votre pays"
        />

        <button>Submit</button>
      </div>
    </form>
  );
};
