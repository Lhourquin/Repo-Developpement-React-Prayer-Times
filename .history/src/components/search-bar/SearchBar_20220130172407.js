import React, {useState} from "react";
import "./searchbar.css";

export const SearchBar = ({ handleChange }) => {

  const [toggleInput, setToggleInput] = useState(false);

  const handleToggle = () => {
    console.log(toggleInput);
    setToggleInput(true);
}

const closeSearch = () => {
  setToggleInput(false);
}

  return (
    <form className="SearchBar__form">
      {/*
      <div className="SearchBar__form__div--container-parametter-degree">
        <button className="SearchBar__form__div--container__button"><i className="fas fa-ruler-combined"></i></button>
      </div>
      */}
      <div className="form__div--find-city-container">
            <input className="form__input--city" 
            type="text" name="city" 
            placeholder={toggleInput ? "Trouvez votre ville" : "Votre ville"}
            onClick={handleToggle}/>
           
        </div>
        <div className={toggleInput ? "isOpen" :" isClose"}>
            <span className="cross"
            onClick={closeSearch}>❌</span>
            <input className="form__input--country" type="text" name="country" placeholder="Votre pays"/>
            <select>
                <option>15°</option>
                <option>Medine</option>
                <option>Shafi'i</option>
                <option>Mecca</option>
            </select>
            <button>Submit</button>
        </div>
      </form>
  );
};
