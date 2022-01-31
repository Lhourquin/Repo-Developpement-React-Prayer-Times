import React from "react";
import { Link } from "react-router-dom";
import "./navbarDayAndMounth.css";
const NavBar = () => {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Day</li>
        </Link>
        <Link to="/calendar">
          <li >Calendar</li>
        </Link>
        
      </ul>
    </nav>
  );
};

export default NavBar;
