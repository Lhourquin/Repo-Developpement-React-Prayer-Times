import React, { useState } from "react";
import "./searchbar.css";

export const SearchBar = ({ handleChangeInputCityValue, handleChangeInputCountryValue, handleSubmitValue }) => {
  const [toggleInput, setToggleInput] = useState(true);
 

  const handleToggle = () => {
    console.log(toggleInput);
    setToggleInput(false);
  };

  const closeSearch = () => {
    setToggleInput(true);
  };


  return (
    <form className="SearchBar__form" onSubmit={handleSubmitValue}>
      {/*
      <div className="SearchBar__form__div--container-parametter-degree">
        <button className="SearchBar__form__div--container__button"><i className="fas fa-ruler-combined"></i></button>
      </div>
      */
       // console.log(inputCountryValue + " " + inputCityValue)
      }
      <div className="SearchBar__form__div--find-city-container">
        <input
          className="SearchBar__form__div--find-city-container__input--city"
          type="text"
          name="city"
          placeholder={toggleInput ? "Trouvez votre ville" : "Votre ville"}
          onClick={handleToggle}
        //  value={inputCityValue}
          onChange={handleChangeInputCityValue}
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
         // value={inputCountryValue}
          onChange={handleChangeInputCountryValue}
        />

        <button type="submit" className="SearchBar__form__div--find-country-container__submit"
                >Submit</button>
      </div>
    </form>
  );
};
