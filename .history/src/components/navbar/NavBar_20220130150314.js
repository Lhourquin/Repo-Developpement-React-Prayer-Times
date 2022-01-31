import React, { useState } from "react";
import "./NavBar.css";

export const NavBar = () => {
  const [buttonBurgerIsClicked, setButtonBurgerIsClicked] = useState(false);

  const handleNavButtonBurgerClick = () => {
    setButtonBurgerIsClicked((isFalse) => !isFalse);
  };

  return (
    <nav className="NavBar__nav">
      <div>
        <span className="NavBar__nav__span--site-name">Waqt Al Falah</span>
        <button
          className="NavBar__nav__button--button-burger"
          onClick={handleNavButtonBurgerClick}
        >
          <i className="fas fa-bars web-font NavBar__nav__button__i--button-burger"></i>
        </button>
      </div>

      <ul
        className={
          "NavBar__nav__ul " +
          (buttonBurgerIsClicked ? "openNavigation" : "closeNavigation ")
        }
      >
        <li className="NavBar__nav__ul__li--home">Acceuil</li>
        <li className="NavBar__nav__ul__li--masjid">Mosquées</li>
      </ul>
    </nav>
  );
};
