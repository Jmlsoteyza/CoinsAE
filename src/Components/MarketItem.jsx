import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sparklines, SparklinesLine } from "react-sparklines";

const MarketItem = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <Link to={`/coin/${props.coins.id}`} key={props.coins.id}>
      <section className="marketItem-container">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="coin-row">
            <div className="img-symbol">
              <img src={props.coins.image} alt="" />
              <p>{props.coins.name}</p>
            </div>
            <p
              style={{
                color: props.coins.current_price < 0 ? "red" : "#EAECEF",
              }}
            >
              {props.coins.current_price < 0
                ? "- $" +
                  Math.abs(props.coins.current_price).toLocaleString("en-US", {
                    minimumFractionDigits: 3,
                    maximumFractionDigits: 3,
                  })
                : "$ " +
                  props.coins.current_price.toLocaleString("en-US", {
                    minimumFractionDigits: 3,
                    maximumFractionDigits: 3,
                    useGrouping: true,
                  })}
            </p>

            <p
              className={
                "idk " +
                (props.coins.price_change_percentage_24h >= 0
                  ? "green-text"
                  : "red-text")
              }
            >
              {props.coins.price_change_percentage_24h.toFixed(2)}%
            </p>
            <p>$ {props.coins.market_cap.toLocaleString()}</p>
            <p className="market-size">
              <Sparklines className="market-size" data={props.coins.sparkline_in_7d.price}>
                <SparklinesLine color="#2ECC71" />
              </Sparklines>
            </p>
          </div>
        )}
      </section>
    </Link>
  );
};

export default MarketItem;
