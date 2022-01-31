import React from "react";
import { Link } from "react-router-dom";
import "./navbarDayAndMounth.css";
const NavBarTodayAndMounth = () => {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>HORAIRES DU JOUR</li>
        </Link>
        <Link to="/calendar">
          <li >HORAIRES DU MOIS</li>
        </Link>
        
      </ul>
    </nav>
  );
};

export default NavBarTodayAndMounth;
