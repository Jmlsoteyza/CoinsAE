import React from "react";
import Logo from "../images/logo.svg";
import twitterLogo from "../images/twitterLogo.svg";
import githubLogo from "../images/githubLogo.svg";
import linkedin from "../images/linkedinLogo.svg";
import sendLogo from "../images/sendLogo.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-Links">
          <div className="sb__footer-Links_div_logo">
            <div className="logoHeader_footer">
              <img className="logo" src={Logo} />
              <h1>CoinsAE</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet,consectetur adipisicing elit. Quis non,
              fugit totam vel laboriosam vitae
            </p>
          </div>
          <div className="sb__footer-Links_div">
            <h3>For Business</h3>
            <p>Authors</p>
            <p>Collection</p>
            <p>Author Profile</p>
            <p>Create Item</p>
          </div>
          <div className="sb__footer-Links_div">
            <h3>Resources</h3>
            <p>Help & Support</p>
            <p>Live Auctions</p>
            <p>Item Details</p>
            <p>Activity</p>
          </div>
          <div className="sb__footer-Links_div">
            <h3>Company</h3>
            <p>Explore</p>
            <p>Contact Us</p>
            <p>Our Blog</p>
            <p>FAQ</p>
          </div>
          <div className="sb__footer-Links_div_sm">
            <h3>Subscribe us!</h3>
            <div className="sb__footer-Links_form">
              <input
                className="form-inputs"
                type="Email"
                placeholder="info@yourgmail.com"
                defaultValue=" "
              />
              <button type="submit">
                <img className="sendLogo" src={sendLogo} />
              </button>
            </div>
            <div className="socialmedia_logo">
              <div className="socialmedia_logo_container">
                <img src={twitterLogo} />
              </div>
              <div className="socialmedia_logo_container">
                <img src={githubLogo} />
              </div>
              <div className="socialmedia_logo_container">
                <img src={linkedin} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
