import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links_div">
            <h4>For Business</h4>
            <a href="">
              <p>Employer</p>
            </a>
            <a href="">
              <p>Employer</p>
            </a>
            <a href="">
              <p>Employer</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>For Business</h4>
            <a href="">
              <p>Resource center</p>
            </a>
            <a href="">
              <p>Testimonial</p>
            </a>
            <a href="">
              <p>Employer</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>For Business</h4>
            <a href="">
              <p>Resource center</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>For Business</h4>
            <a href="">
              <p>About</p>
            </a>
            <a href="">
              <p>Press</p>
            </a>
            <a href="">
              <p>Employer</p>
            </a>
            <a href="">
              <p>Employer</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
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

        <hr></hr>

        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>@{new Date().getFullYear()} CodeInn. All right reserved.</p>
          </div>
        </div>
        <div className="sb__footer-below-links">
        <a href="/terms"><div><p>Terms & Conditions</p></div></a>
        <a href="/terms"><div><p>Privacy</p></div></a>
        <a href="/terms"><div><p>Security</p></div></a>
        <a href="/terms"><div><p>Cookei Declaration</p></div></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
