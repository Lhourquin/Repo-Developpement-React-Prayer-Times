import React from "react";
import { Link } from "react-router-dom";
import "./navbar-today-and-mounth.css";
const NavBarTodayAndMounth = () => {
  return (
    <nav className="NavBarTodayAndMounth__nav">
      <ul className="NavBarTodayAndMounth__nav__ul">
        <Link to="/" className="NavBarTodayAndMounth__nav__ul__Link">
          <li>HORAIRES DU JOUR</li>
        </Link>
        <Link to="/calendar" className="NavBarTodayAndMounth__nav__ul__Link">
          <li >HORAIRES DU MOIS</li>
        </Link>
        
      </ul>
    </nav>
  );
};

export default NavBarTodayAndMounth;
