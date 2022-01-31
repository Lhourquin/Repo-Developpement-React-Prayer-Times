import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Day</li>
        </Link>
        <Link>
          <li to="/calendar">Calendar</li>
        </Link>
        <Link>
          <li to="/masjid">Masjid</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
