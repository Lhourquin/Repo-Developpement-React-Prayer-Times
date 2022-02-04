import React from "react";
import { Link } from "react-router-dom";
import "./navbar-today-and-mounth.css";
const NavBarTodayAndMounth = () => {
  return (
    <nav className="NavBarTodayAndMounth__nav">
      <ul className="NavBarTodayAndMounth__nav__ul">
        <li className="NavBarTodayAndMounth__nav__ul__li--today">
          <Link
            to="/"
            className="NavBarTodayAndMounth__nav__ul__li__Link-today"
          >
            <span>AUJOURD'HUI</span>
            <i className="fa-solid fa-clock"></i>{" "}
          </Link>
        </li>
        <li className="NavBarTodayAndMounth__nav__ul__li--month">
          <Link
            to="/calendar"
            className="NavBarTodayAndMounth__nav__ul__li__Link-mounth"
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
