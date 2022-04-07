import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  const [buttonBurgerIsClicked, setButtonBurgerIsClicked] = useState(false);

  const handleNavButtonBurgerClick = () => {
    setButtonBurgerIsClicked((isFalse) => !isFalse);
  };

  useEffect(()=> {
    let btnLocation= document.getElementsByClassName('button-location')[0];
    let btnInfos = document.getElementsByClassName("TodayTimesList__ul-times-list__li__span--information");
    if(buttonBurgerIsClicked === true){
      btnLocation.style.opacity = "0"
      btnLocation.style.pointerEvents = "none";
      btnInfos[0].style.pointerEvents = "none";
      btnInfos[1].style.pointerEvents = "none";
      btnInfos[2].style.pointerEvents = "none";
      btnInfos[3].style.pointerEvents = "none";
      btnInfos[4].style.pointerEvents = "none";
      btnInfos[0].style.opacity = "0";
      btnInfos[1].style.opacity = "0"
      btnInfos[2].style.opacity = "0"
      btnInfos[3].style.opacity = "0"
      btnInfos[4].style.opacity = "0"
    }else if(buttonBurgerIsClicked === false){
      //btnLocation.style.remove
      btnLocation.style.pointerEvents = "";
      btnLocation.style.opacity = "1";
      btnLocation.style.transition = "0.9s";
      btnInfos[0].style.pointerEvents = "";
      btnInfos[1].style.pointerEvents = "";
      btnInfos[2].style.pointerEvents = "";
      btnInfos[3].style.pointerEvents = "";
      btnInfos[4].style.pointerEvents = "";
      btnInfos[0].style.opacity = "1";
      btnInfos[1].style.opacity = "1"
      btnInfos[2].style.opacity = "1"
      btnInfos[3].style.opacity = "1"
      btnInfos[4].style.opacity = "1"
      btnInfos[0].style.transition = "1s";
      btnInfos[1].style.transition = "1s"
      btnInfos[2].style.transition = "1s"
      btnInfos[3].style.transition = "1s"
      btnInfos[4].style.transition = "1s"
      



    }
  },[buttonBurgerIsClicked])



  return (


    <nav>
      {console.log(buttonBurgerIsClicked)}
      <div className="navbar">
        <div className="container nav-container">
          <input className="checkbox" type="checkbox" name="" id="" 
          onClick={()=> setButtonBurgerIsClicked((isFalse) => !isFalse)}/>
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <div className="logo">
            <span>React Prayer Time</span>
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
            <li>

              <Link
                to="/quran"
              >
                <strong>Coran</strong>

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