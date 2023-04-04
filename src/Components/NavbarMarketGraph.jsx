import React, { useState } from "react";
import { Link } from "react-router-dom";
import Darkmode from "../images/Moon.svg";
import Logo from "../images/logo.svg";

const NavbarMarketGraph = () => {
  const [click, setClick] = useState(false);

  const navbarClick = () => setClick(!click);

  return (
    <div className="navbar_open">
    <div className="stickyBar navbar_marketgraph">
      <div className="navbar">
        <div className="logoHeader">
          <img className="logo" src={Logo} />
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
          <img src={Darkmode} alt="moon"></img>
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
