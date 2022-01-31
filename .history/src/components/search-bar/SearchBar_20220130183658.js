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
      <div className="SearchBar__form--find-city-container">
        <input
          className="form__input--city"
          type="text"
          name="city"
          placeholder={toggleInput ? "Trouvez votre ville" : "Votre ville"}
          onClick={handleToggle}
        />
         <button className="SearchBar__form__div--container__button">
        <i className="fas fa-map-marker-alt" style={(toggleInput ? {} : {display : "none"})}></i>
      </button>
      </div>
     
      <div className={toggleInput ? "isClose" : " isOpen"}>
        <span className="cross" onClick={closeSearch}>
          ❌
        </span>
        <input
          className="form__input--country"
          type="text"
          name="country"
          placeholder="Votre pays"
        />

        <button>Submit</button>
      </div>
    </form>
  );
};
