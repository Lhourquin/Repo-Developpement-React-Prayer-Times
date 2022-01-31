import React from "react";
import { Link } from "react-router-dom";
import "./navbarDayAndMounth.css";
const NavBar = () => {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Aujourd'hui</li>
        </Link>
        <Link to="/calendar">
          <li >Mois</li>
        </Link>
        
      </ul>
    </nav>
  );
};

export default NavBar;
