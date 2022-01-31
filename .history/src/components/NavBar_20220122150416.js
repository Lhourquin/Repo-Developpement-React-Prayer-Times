import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <Link>
          <li>Day</li>
        </Link>
        <Link>
          <li>Calendar</li>
        </Link>
        <Link>
          <li>Masjid</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
