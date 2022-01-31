import React from "react";
import { Link } from "react-router-dom";
import "./navbarDayAndMounth.css";
const NavBar = () => {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Horaires du jour</li>
        </Link>
        <Link to="/calendar">
          <li >Horaires du mois</li>
        </Link>
        
      </ul>
    </nav>
  );
};

export default NavBar;
