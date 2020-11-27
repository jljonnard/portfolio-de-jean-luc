import React, { useState, useEffect } from "react";

import logoGithub from "./images/githublogo.png";
import tripfindr from "./videos/tripfindr.mp4";
import cryptocompare from "./videos/crypto-compare.mp4";

const Site = ({ title, lienSite, lienGithub, video }) => {
    const [width, setWidth] = useState(200);

    useEffect(() => {
        setWidth(document.querySelector(".box").offsetWidth - 5);
    }, []);

    return (
        <div className="box">
            <h4>{title}</h4>
            <video
                autoPlay
                playsInline
                muted
                loop
                width={width}
                src={video === "crypto-compare" ? cryptocompare : tripfindr}
            >
                Sorry, your browser doesn't support embedded videos.
            </video>
            <a
                className="clickable button"
                href={lienSite}
                target="_blank"
                rel="noopener noreferrer"
            >
                Tester l'application
            </a>
            <div>
                <img
                    className="logoGithub"
                    src={logoGithub}
                    alt="logo Github"
                    height="14px"
                    width="14px"
                ></img>
                <a
                    className="clickable alt button"
                    href={lienGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Consulter le code
                </a>
            </div>
        </div>
    );
};

export default Site;
