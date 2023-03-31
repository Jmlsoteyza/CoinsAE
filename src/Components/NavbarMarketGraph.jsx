import React from "react";
import { Link } from "react-router-dom";
import Darkmode from "../images/Moon.svg";
import Logo from '../images/logo.svg'

const NavbarMarketGraph = () => {
  return (
    <Link to="/">
      <div className="stickyBar">
        <div className="navbar">
        <div className="logoHeader">
        <img className="logo" src={Logo} />
          <h1>CoinsAE</h1>
          </div>
          <ul className="ul-container">
            <li>Home</li>
            <li>Market</li>
            <li>Service</li>
            <li>Contact Us</li>
          </ul>
          <img src={Darkmode} alt="moon"></img>
        </div>
      </div>
    </Link>
  );
};

export default NavbarMarketGraph;
