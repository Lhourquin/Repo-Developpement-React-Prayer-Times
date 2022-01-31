import React from "react";
import "./searchbar.css";

export const SearchBar = ({ handleChange }) => {
  return (
    <form className="SearchBar__form">
      <div className="SearchBar__form__div--container-parametter-degree">
        <button className="SearchBar__form__div--container__button"><i className="fas fa-ruler-combined"></i></button>
      </div>
      <div className="SearchBar__form__div--container-inputCountry-inputCity-localisationButton">
        <input
          className="country"
          type="search"
          placeholder="Votre pays"
        />
        <input
          className="city"
          type="search"
          placeholder="Votre ville"
          onChange={handleChange}
        />
        <button className="SearchBar__form__div--container__button"><i className="fas fa-map-marker-alt"></i></button>
      </div>

      <button className="SearchBar__form__button--search">Rechercher</button>
    </form>
  );
};
