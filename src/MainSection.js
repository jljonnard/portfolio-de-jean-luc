import React from "react";
import Site from "./Site";

import logoLinkedIn from "./images/logolinkedin.png";

const MainSection = () => {
    return (
        <div className="sub main container">
            <h2 className="wrapper title">Projets Réalisés</h2>
            <div className="container">
                <Site
                    title="Un projet React + Redux"
                    lienSite="https://crypto-compare-eta.vercel.app/"
                    lienGithub="https://github.com/jljonnard/crypto-compare"
                    video="crypto-compare"
                />
                <Site
                    title="Un projet React avec les hooks"
                    lienSite="https://tripfindr.vercel.app/"
                    lienGithub="https://github.com/jljonnard/tripfindr"
                />
            </div>
            <h2 className="wrapper title">Me contacter</h2>
            <div className="contact">
                <img src={logoLinkedIn} alt="LinkedIn" height="18px" width="18px"></img>
                <a className="clickable linkedin"
                    href="https://www.linkedin.com/in/jean-luc-jonnard-b63790173/"
                    target="_blank"
                    rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div className="contact">
                <div>Par Mail : </div>
                <div
                    className="clickable copy"
                    title="Cliquez-dessus pour copier"
                    onClick={() => {
                        navigator.clipboard.writeText("jean-luc.jonnard@hotmail.fr");
                    }}
                >
                    jean-luc.jonnard@hotmail.fr
                </div>
            </div>
        </div>
    );
};

export default MainSection;
