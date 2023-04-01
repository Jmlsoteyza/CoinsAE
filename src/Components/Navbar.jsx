import React, {useState} from "react";
import Darkmode from "../images/Moon.svg";
import { Link as ScrollLink } from "react-scroll";
import Logo from '../images/logo.svg'


const Navbar = () => {

  const [click, setClick] = useState(false)

  const navbarClick = () => setClick(!click)

  const Link = ({ to, onClick, children }) => {
    if (to.startsWith("#")) {
      return (
        <ScrollLink to={to.slice(1)} smooth onClick={onClick}>
          {children}
        </ScrollLink>
      );
    }
  };


  return (
    <div className="stickyBar">
      <div className="navbar">
      <div className="logoHeader">
      <img className="logo" src={Logo} />
        <h1>CoinsAE</h1>
        </div>
        <ul className={click ? 'ul-container active' : 'ul-container'}>
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
        <div className="navbar-moon-menubar">
        <img src={Darkmode} alt="moon"></img>
        <div  className={click ? "toggle active" : 'toggle'} onClick={navbarClick}>
        <span></span>
        <span></span>
        <span></span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
