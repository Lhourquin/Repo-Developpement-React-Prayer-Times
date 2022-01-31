import React from "react";
import { Link } from "react-router-dom";
import "./navbar-today-and-mounth.css";
const NavBarTodayAndMounth = () => {
  return (
    <nav className="NavBarTodayAndMounth__nav">
      <ul className="NavBarTodayAndMounth__nav__ul">
        <li>
  <Link to="/" className="NavBarTodayAndMounth__nav__ul__Link">
         HORAIRES DU JOUR
        </Link>
        </li>
      <li>
         <Link to="/calendar" className="NavBarTodayAndMounth__nav__ul__Link">
          HORAIRES DU MOIS
        </Link>
        
      </li>
       
      </ul>
    </nav>
  );
};

export default NavBarTodayAndMounth;
