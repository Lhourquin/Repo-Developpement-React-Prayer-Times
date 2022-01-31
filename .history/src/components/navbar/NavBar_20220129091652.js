import React, {useState} from "react";
import "./NavBar.css";

export const NavBar = () => {

    const [buttonBurgerisClicked, setButtonBurgerIsClicked] = useState(false);

    
    const handleNavButtonBurgerClick = () => {
        console.log(buttonBurgerisClicked)
        //setButtonBurgerIsClicked(true);
    }

  return (
    <nav className="NavBar__nav">
      <span className="NavBar__nav__span--site-name">Waqt Al Falah</span>
      <i className="fas fa-bars web-font NavBar__nav__i--button-burger"
            onClick={handleNavButtonBurgerClick}></i>
      <ul className={"NavBar__nav__ul " + buttonBurgerisClicked ? "" : "openNavigation" }>
        <li className="NavBar__nav__ul__li--home">Acceuil</li>
        <li className="NavBar__nav__ul__li--masjid">Mosquées</li>
      </ul>
    </nav>
  );
};
