import React, { useState, useEffect } from "react";
import Bitcoin from "../images/bitcoin.png";
import Ethereum from "../images/ethereum.png";
import { Link } from "react-router-dom";
import bgColor from "../images/bg-gradient.png";

const Hero = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (!props.coins || props.coins.length === 0) {
    return null;
  }

  return (
    <section id="Home" className="hero-section">
      {loading ? (
        <div className="cssload-container">
          <div className="cssload-loader">
            <div className="cssload-inner cssload-one"></div>
            <div className="cssload-inner cssload-two"></div>
            <div className="cssload-inner cssload-three"></div>
          </div>
        </div>
      ) : (
        <div className="hero-container">
          <div className="heroTextAndImage">
            <img className="bitcoin-img" src={Bitcoin} alt="btc"></img>
            <h1 className="nextgen-text">NEXT GEN</h1>
            <h1 className="cryptomarket-text">
              <span className="crypto-text">CRYPTO</span> MARKET
            </h1>
            <img className="ethereum-img" src={Ethereum} alt="eth"></img>
          </div>
          <div className="heroInnerContainer">
            <div className="coins-chart-container">
              <Link to={`/coin/${props.coins[0].id}`} key={props.coins[0].id}>
                <div className="coins-chart">
                  <div className="coins-chart-border">
                    <div className="coins-chart_rank">
                      <p className="coins-name">
                        0{props.coins[0].market_cap_rank}
                      </p>
                    </div>
                    <img src={props.coins[0].image} alt={props.coins.name} />
                    <div className="coins-chart-text_displayBlock">
                      <p className="coins-name">{props.coins[0].name}</p>
                      <p className={props.coins[0].current_price_change_percentage_24h >= 0 ? "green-text" : "red-text"}>
                        {props.coins[0].price_change_percentage_24h.toFixed(2)}%
                      </p>
                    </div>
                    <p>${props.coins[0].current_price.toLocaleString()}</p>
                  </div>
                </div>
              </Link>
              <Link to={`/coin/${props.coins[1].id}`} key={props.coins[1].id}>
                <div className="coins-chart">
                  <div className="coins-chart-border">
                    <div className="coins-chart_rank">
                      <p className="coins-name">
                        0{props.coins[1].market_cap_rank}
                      </p>
                    </div>
                    <img src={props.coins[1].image} alt={props.coins.name} />
                    <div className="coins-chart-text_displayBlock">
                      <p className="coins-name">{props.coins[1].name}</p>
                      <p className={props.coins[1].price_change_percentage_24h >= 0 ? "green-text" : "red-text"}>
                        {props.coins[1].price_change_percentage_24h.toFixed(2)}%
                      </p>
                    </div>
                    <p>${props.coins[1].current_price.toLocaleString()}</p>
                  </div>
                </div>
              </Link>
              <Link to={`/coin/${props.coins[2].id}`} key={props.coins[2].id}>
                <div className="coins-chart">
                  <div className="coins-chart-border">
                    <div className="coins-chart_rank">
                      <p className="coins-name">
                        0{props.coins[2].market_cap_rank}
                      </p>
                    </div>
                    <img src={props.coins[2].image} alt={props.coins.name} />
                    <div className="coins-chart-text_displayBlock">
                      <p className="coins-name">{props.coins[2].name}</p>
                      <p className={props.coins[2].price_change_percentage_24h >= 0 ? "green-text" : "red-text"}>
                      {props.coins[2].price_change_percentage_24h.toFixed(2)}%
                    </p>
                    
                    </div>
                    <p>${props.coins[2].current_price.toLocaleString()}</p>
                  </div>
                </div>
              </Link>
              <Link to={`/coin/${props.coins[3].id}`} key={props.coins[3].id}>
                <div className="coins-chart">
                  <div className="coins-chart-border">
                    <div className="coins-chart_rank">
                      <p className="coins-name">
                        0{props.coins[3].market_cap_rank}
                      </p>
                    </div>
                    <img src={props.coins[3].image} alt={props.coins.name} />
                    <div className="coins-chart-text_displayBlock">
                      <p className="coins-name">{props.coins[3].name}</p>
                      <p className={props.coins[3].price_change_percentage_24h >= 0 ? "green-text" : "red-text"}>
                        {props.coins[3].price_change_percentage_24h.toFixed(2)}%
                      </p>
                    </div>
                    <p>${props.coins[3].current_price.toLocaleString()}</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
      <div className="bg-gradient">
        <img src={bgColor} alt="background" />
        </div>
    </section>
  );
};

export default Hero;
