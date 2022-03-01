import React, { useState } from "react";
import "./NavBar.css";

export const NavBar = () => {
  const [buttonBurgerIsClicked, setButtonBurgerIsClicked] = useState(false);

  const handleNavButtonBurgerClick = () => {
    setButtonBurgerIsClicked((isFalse) => !isFalse);
  };
  

  return (
    <nav className={buttonBurgerIsClicked ? "NavBar__nav openEffect" : "NavBar__nav closeEffect"}>
        <span className="NavBar__nav__span--site-name">Waqt Al Falaah</span>
        <button
          className="NavBar__nav__button--button-burger"
          onClick={handleNavButtonBurgerClick}
        >
          <i className="fas fa-bars web-font NavBar__nav__button__i--button-burger"></i>
        </button>

      <ul
        className={
          
          (buttonBurgerIsClicked ?  "NavBar__nav__ul openNavigation " : "NavBar__nav__ul  closeNavigation")
        }
      >
        <li className="NavBar__nav__ul__li--home">Acceuil</li>
        <li className="NavBar__nav__ul__li--masjid">Mosquées</li>
      </ul>
    </nav>
  );
};
