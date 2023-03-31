import React from "react";
import Darkmode from "../images/Moon.svg";
import { Link as ScrollLink } from "react-scroll";
import Logo from '../images/logo.svg'

const Link = ({ to, onClick, children }) => {
  if (to.startsWith("#")) {
    return (
      <ScrollLink to={to.slice(1)} smooth onClick={onClick}>
        {children}
      </ScrollLink>
    );
  }
};
const Navbar = () => {
  return (
    <div className="stickyBar">
      <div className="navbar">
      <div className="logoHeader">
      <img className="logo" src={Logo} />
        <h1>CoinsAE</h1>
        </div>
        <ul className="ul-container">
          <li>
            <Link spy={true} smooth={true} duration={500} to="#Home">
              Home
            </Link>
          </li>
          <li>
            <Link spy={true} smooth={true} duration={500} to="#Market">
              Market
            </Link>
          </li>
          <li>
            <Link spy={true} smooth={true} duration={500} to="#Service">
              Service
            </Link>
          </li>
          <li>
            <Link
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              to="#Contact"
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <img src={Darkmode} alt="moon"></img>
      </div>
    </div>
  );
};

export default Navbar;
