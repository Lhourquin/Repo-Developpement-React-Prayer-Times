import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  const [buttonBurgerIsClicked, setButtonBurgerIsClicked] = useState(false);

  const handleNavButtonBurgerClick = () => {
    setButtonBurgerIsClicked((isFalse) => !isFalse);
  };


  return (


    <nav>
      <div className="navbar">
        <div className="container nav-container">
          <input className="checkbox" type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <div className="logo">
            <span>Waqt Al Falaah</span>
          </div>
          <div className="menu-items">
            <li><Link
            to="/"
            >

              <strong>Acceuil</strong>
            </Link>

            </li>
            <li>

              <Link
                to="/masjid"
              >
                <strong>Mosquées</strong>

              </Link>

            </li>

          </div>
        </div>
      </div>
    </nav>
  );
};
{/*  <nav className={buttonBurgerIsClicked ? "NavBar__nav openEffect" : "NavBar__nav closeEffect"}>
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
    </nav>*/}