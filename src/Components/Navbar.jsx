import React, { useState, useContext, useEffect } from "react";
import Darkmode from "../images/Moon.svg";
import Lightmode from "../images/Sun.svg";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../images/logo.svg";
import Logo1 from "../images/logo1.svg";
import { ThemeContext } from "../App";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [click, setClick] = useState(false);
  const navbarClick = () => setClick(!click);
  const [smoothNav, setSmoothNav] = useState(false) 
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 143) {
        setSmoothNav(true);
      } else {
        setSmoothNav(false)
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll)
    };
  }, [])

  const stickyBarClass = `stickyBar ${smoothNav ? 'smoothNav' : ''}`;

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
    <div className="navbar_open">
    <div className={stickyBarClass}>
      <div className="navbar">
        <div className="logoHeader">
          <img className="logo darkLogo" src={Logo} />
          <img className="logo lightLogo" src={Logo1} />
          <h1>CoinsAE</h1>
        </div>
        <ul className={click ? "ul-container active" : "ul-container"}>
          <li>
            <Link spy={true} smooth={true} duration={500} offset={50} to="#Home">
              Home
            </Link>
          </li>
          <li>
            <Link spy={true} smooth={true} duration={500} offset={50} to="#Market">
              Market
            </Link>
          </li>
          <li>
            <Link spy={true} smooth={true} duration={500} offset={30} to="#Service">
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

export default Navbar;
