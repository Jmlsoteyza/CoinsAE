import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Darkmode from "../images/Moon.svg";
import Logo from "../images/logo.svg";
import { ThemeContext } from "../App";
import Lightmode from "../images/Sun.svg";

const NavbarMarketGraph = () => {
  const [click, setClick] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const navbarClick = () => setClick(!click);

  return (
    <div className="navbar_open">
      <div className="stickyBar navbar_marketgraph">
        <div className="navbar">
          <div className="logoHeader">
            <img className="logo" src={Logo} alt={Logo} />
            <a href="/">
              <h1>CoinsAE</h1>
            </a>
          </div>
          <Link to="/">
            <ul className={click ? "ul-container active" : "ul-container"}>
              <li>Home</li>
              <li>Market</li>
              <li>Service</li>
              <li>Contact Us</li>
            </ul>
          </Link>
          <div className="navbar-moon-menubar">
            {theme === "dark" ? (
              <img src={Darkmode} alt="moon" onClick={toggleTheme}></img>
            ) : (
              <img src={Lightmode} alt="sun" onClick={toggleTheme}></img>
            )}
            <div
              className={click ? "toggle active" : "toggle"}
              onClick={navbarClick}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMarketGraph;
