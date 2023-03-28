import axios from "axios";
import React, { useState, useEffect } from "react";
import callIcon from "../images/call-icon.svg";
import atIcon from "../images/at-icon.svg";
import locationIcon from "../images/location-icon.svg";

const CryptoNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://crypto-news11.p.rapidapi.com/cryptonews/bitcoin",
      params: { max_articles: "10", last_n_hours: "48", top_n_keywords: "10" },
      headers: {
        "X-RapidAPI-Key": "dcb55dc893msh07c19a4b970bfb5p1df0bfjsn6f630f2c29ff",
        "X-RapidAPI-Host": "crypto-news11.p.rapidapi.com",
      },
    };

    axios
      .get(options.url, { headers: options.headers })
      .then(function (response) {
        setNews(response.data);
      })
      .catch(function (error) {});
  }, []);

  return (
    <section id="Contact" className="Contact-Us">
      <section className="cryptoNews">
        <h2>Latest crypto news</h2>
        <ul>
          {Array.isArray(news.articles) &&
            news.articles.slice(0, 5).map((item, index) => (
              <li key={index}>
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
        </ul>
      </section>

      <section className="contact-us_container">
        <div className="contact-us_header">
          <h1>Contact us now!</h1>
          <p></p>
        </div>
        <div className="contact-us_form-flex">
          <div className="contact-us_row">
            <div className="contact-us_row_container">
              <div className="contact-us_row_box">
                <span className="contact-us_row_circle">
                  <img src={callIcon} alt="callIcon" />
                </span>
                <div className="contact-us_row_text">
                  <h2>Contact phone</h2>
                  <p>0543196753</p>
                </div>
              </div>
              <div className="contact-us_row_box">
                <span className="contact-us_row_circle">
                  <img src={atIcon} alt="atIcon" />
                </span>
                <div className="contact-us_row_text">
                  <h2>Email</h2>
                  <p>jmlsoteyza.dev@gmail.com</p>
                </div>
              </div>
              <div className="contact-us_row_box">
                <span className="contact-us_row_circle">
                  <img src={locationIcon} alt="locationIcon" />
                </span>
                <div className="contact-us_row_text">
                  <h2>Location</h2>
                  <p>Bur dubai, dubai</p>
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
                  defaultValue="readOnly"
                />
              </div>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="Your Message"
                defaultValue="readOnly"
              ></textarea>
              <input type="Submit" defaultValue="send"  />
            </form>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CryptoNews;
