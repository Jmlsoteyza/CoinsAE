import React from "react";
import { Link } from "react-router-dom";
import Darkmode from "../images/Moon.svg";

const NavbarMarketGraph = () => {
  return (
    <Link to="/">
      <div className="stickyBar">
        <div className="navbar">
          <h1>Coins.AE</h1>
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
