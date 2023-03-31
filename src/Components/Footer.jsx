import React from "react";
import Logo from "../images/logo.svg";

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
            Lorem ipsum dolor sit amet,consectetur adipisicing elit. Quis non, fugit totam vel laboriosam vitae
            </p>
          </div>
          <div className="sb__footer-Links_div">
            <h2>For Business</h2>
            <p>Authors</p>
            <p>Collection</p>
            <p>Author Profile</p>
            <p>Create Item</p>
          </div>
          <div className="sb__footer-Links_div">
            <h2>Resources</h2>
            <p>Help & Support</p>
            <p>Live Auctions</p>
            <p>Item Details</p>
            <p>Activity</p>
          </div>
          <div className="sb__footer-Links_div">
            <h2>Company</h2>
            <p>Explore</p>
            <p>Contact Us</p>
            <p>Our Blog</p>
            <p>FAQ</p>
          </div>
          <div className="sb__footer-Links_div">
            <h4>Coming soon on</h4>
            <div className="socialmedia">
              <p>
                <img />
              </p>
              <p>
                <img />
              </p>
              <p>
                <img />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
