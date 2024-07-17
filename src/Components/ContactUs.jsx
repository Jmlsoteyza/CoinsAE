import callIcon from "../images/call-icon.svg";
import atIcon from "../images/at-icon.svg";
import locationIcon from "../images/location-icon.svg";
import twitterLogo from "../images/twitterLogo.svg";
import githubLogo from "../images/githubLogo.svg";
import linkedin from "../images/linkedinLogo.svg";
import callIcon_lightmode from "../images/call-icon_lightmode.svg";
import atIcon_lightmode from "../images/at-icon_lightmode.svg";
import locationIcon_lightmode from "../images/location-icon_lightmode.svg";

const ContactUs = () => {
  return (
    <section id="Contact" className="Contact-Us">
      <section className="contact-us_container">
        <div className="contact-us_header">
          <h1>Contact Us Now!</h1>
          <p></p>
        </div>
        <div className="contact-us_form-flex">
          <div className="contact-us_row">
            <div className="contact-us_row_container">
              <div className="contact-us_row_box">
                <div className="contact-us_row_text">
                  <h2>Request a contact us</h2>
                  <p>
                    Our cryptocurrency, CryptoAE, features a sleek and visually
                    appealing design that can enhance the aesthetics of your
                    website. If you're interested in improving your website's
                    look and feel, please get in touch with us using the contact
                    information provided below. We'd be happy to help you create
                    a website that is just as appealing as CryptoAE.
                  </p>
                  <div className="contact-us_adress_container">
                    <div className="contact-us_andress">
                      <img
                        className="darkmode_icon"
                        src={callIcon}
                        alt="callIcon"
                      />
                      <img
                        className="lightmode_icon"
                        src={callIcon_lightmode}
                        alt="callIcon_lightmode"
                      />
                      <p>+58 165 4064</p>
                    </div>
                    <div className="contact-us_andress">
                      <img
                        className="darkmode_icon"
                        src={atIcon}
                        alt="atIcon"
                      />
                      <img
                        className="lightmode_icon"
                        src={atIcon_lightmode}
                        alt="atIcon_lightmode"
                      />
                      <p>jmlsoteyza.dev@gmail.com</p>
                    </div>
                    <div className="contact-us_andress">
                      <img
                        className="darkmode_icon"
                        src={locationIcon}
                        alt="locationIcon"
                      />
                      <img
                        className="lightmode_icon"
                        src={locationIcon_lightmode}
                        alt="locationIcon_lightmode"
                      />
                      <p>Bur dubai, dubai</p>
                    </div>
                  </div>
                  <div className="socialmedia_logo">
                    <div className="socialmedia_logo_container">
                      <img src={twitterLogo} alt="twitterLogo" />
                    </div>
                    <div className="socialmedia_logo_container">
                      <a
                        href="https://github.com/Jmlsoteyza?tab=repositories"
                        style={{ fontSize: 0, lineHeight: 0 }}
                      >
                        <img src={githubLogo} alt="githubLogo" />
                      </a>
                    </div>
                    <div className="socialmedia_logo_container">
                      <a
                        href="https://www.linkedin.com/in/jom-luis-oteyza/"
                        style={{ fontSize: 0, lineHeight: 0 }}
                      >
                        <img src={linkedin} alt="linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="form-container">
            <form>
              <h2>Drop Us A Message</h2>
              <div className="form-text_email">
                <input className="form-inputs" type="text" placeholder="Name" />
                <input
                  className="form-inputs"
                  type="Email"
                  placeholder="Email"
                  defaultValue=" "
                />
              </div>
              <input
                className="form-inputs"
                type="text"
                placeholder="Subject"
              />
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="Message"
                style={{ resize: "none" }}
              />
              <input type="Submit" defaultValue="send" />
            </form>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ContactUs;
