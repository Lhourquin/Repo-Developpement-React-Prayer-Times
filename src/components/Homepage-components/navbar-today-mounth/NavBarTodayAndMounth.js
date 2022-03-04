import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar-today-and-mounth.css";
const NavBarTodayAndMounth = () => {
  const [currentComponent, setCurrentComponent] = useState(0);

  const clickedComponent = (number) => {
    if (number === 0) {
      setCurrentComponent(0);
      console.log(number);
    } else if (number === 1) {
      console.log(number);

      setCurrentComponent(1);
    }
  };

  return (
    <nav className="NavBarTodayAndMounth__nav">
      <ul className="NavBarTodayAndMounth__nav__ul">
        <li className={currentComponent === 0 ? "NavBarTodayAndMounth__nav__ul__li--today currentComponent" : "NavBarTodayAndMounth__nav__ul__li--today"}>
          <Link
            to="/"
            className="NavBarTodayAndMounth__nav__ul__li__Link-today"
            onClick={() => clickedComponent(0)}
          >
            <span>AUJOURD'HUI</span>
            <i className="fa-solid fa-clock"></i>{" "}
          </Link>
        </li>
        <li  className={currentComponent === 1 ? "NavBarTodayAndMounth__nav__ul__li--month currentComponent" : "NavBarTodayAndMounth__nav__ul__li--month"}>
          <Link
            to="/calendar"
            className="NavBarTodayAndMounth__nav__ul__li__Link-mounth"
            onClick={() => clickedComponent(1)}
          >
            <span>CALENDRIER</span>
            <i className="fa-solid fa-calendar-days"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarTodayAndMounth;
