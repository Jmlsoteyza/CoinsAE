import callIcon from "../images/call-icon.svg";
import atIcon from "../images/at-icon.svg";
import locationIcon from "../images/location-icon.svg";
import twitterLogo from "../images/twitterLogo.svg";
import githubLogo from "../images/githubLogo.svg"
import linkedin from "../images/linkedinLogo.svg"

const CryptoNews = () => {
  return (
    <section id="Contact" className="Contact-Us">
      <section className="contact-us_container">
        <div className="contact-us_header">
          <h1>Contact us now!</h1>
          <p></p>
        </div>
        <div className="contact-us_form-flex">
          <div className="contact-us_row">
            <div className="contact-us_row_container">
              <div className="contact-us_row_box">
                <div className="contact-us_row_text">
                  <h2>Request a contact us</h2>
                  <p>
                    Revail The universal acceptance of building has given a
                    tremendous opportunity for merchants to do crossborder
                    transactions instantly and at reduced cost.
                  </p>
                  <div className="contact-us_adress_container">
                    <div className="contact-us_andress">
                    <img src={callIcon}/>
                      <p>+58 165 4064</p>
                    </div>
                    <div className="contact-us_andress">
                    <img src={atIcon} />
                      <p>jmlsoteyza.dev@gmail.com</p>
                    </div>
                    <div className="contact-us_andress">
                    <img src={locationIcon}/>
                      <p>Bur dubai, dubai</p>
                    </div>
                  </div>
                  <div className="socialmedia_logo">
                  <div className="socialmedia_logo_container">
                  <img src={twitterLogo} />
                  </div>
                  <div className="socialmedia_logo_container">
                  <img src={githubLogo}/>
                  </div>
                  <div className="socialmedia_logo_container">
                  <img src={linkedin}/>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="form-container">
            <form>
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
                  defaultValue="Subject "
                />
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="Your Message"
                defaultValue="Your Message "
              ></textarea>
              <input type="Submit" defaultValue="send" />
            </form>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CryptoNews;
