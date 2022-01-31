import React from "react";
import "./NavBar.css"

export const NavBar = () => {
    return (
        <nav>
            			<i className="fas fa-bars web-font button-burger"></i>
                        <span>Waqt Al Falah</span>
                        <ul>
                            <li>Acceuil</li>
                            <li>Mosquées</li>

                        </ul>
        </nav>
    )
}