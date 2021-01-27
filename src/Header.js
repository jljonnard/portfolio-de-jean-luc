import React from "react";

import profil from "./images/profil.jpg";

const Header = () => {
    return (
        <header className="alone-header">
            <a
                className="clickable linkedin"
                href="https://www.linkedin.com/in/jean-luc-jonnard-b63790173/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img className="profil" src={profil} alt="LinkedIn"></img>
            </a>
            <div className="inner oui">
                <h1>Jean-Luc Jonnard</h1>
                <p>Développeur passioné en recherche de missions React.js</p>
            </div>
        </header>
    );
};

export default Header;
