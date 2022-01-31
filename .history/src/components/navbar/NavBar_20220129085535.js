import React from "react";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <nav className="NavBar__nav">
      <span>Waqt Al Falah</span>
      <i className="fas fa-bars web-font button-burger"></i>
      <ul>
        <li>Acceuil</li>
        <li>Mosquées</li>
      </ul>
    </nav>
  );
};
