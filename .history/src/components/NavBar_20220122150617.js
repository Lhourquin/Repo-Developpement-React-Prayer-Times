import React from "react";
import { Link } from "react-router-dom";

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
        <Link to="/masjid">
          <li >Masjid</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
