import React, { useState } from "react";
import "./NavBar.css";

export const NavBar = () => {
  const [buttonBurgerIsClicked, setButtonBurgerIsClicked] = useState(true);

  const handleNavButtonBurgerClick = () => {
    setButtonBurgerIsClicked((isFalse) => !isFalse);
  };

  return (
    <nav className="NavBar__nav" style={(buttonBurgerIsClicked ? {transition: "width 0.2s, height 0.2s, transform 2s" }: {height : 128, transition: "width 1s, height 1s, transform 2s" })}>
        <span className="NavBar__nav__span--site-name">Waqt Al Falah</span>
        <button
          className="NavBar__nav__button--button-burger"
          onClick={handleNavButtonBurgerClick}
        >
          <i className="fas fa-bars web-font NavBar__nav__button__i--button-burger"></i>
        </button>

      <ul
        className={
          "NavBar__nav__ul " +
          (buttonBurgerIsClicked ? "closeNavigation" : "openNavigation ")
        }
      >
        <li className="NavBar__nav__ul__li--home">Acceuil</li>
        <li className="NavBar__nav__ul__li--masjid">Mosquées</li>
      </ul>
    </nav>
  );
};
