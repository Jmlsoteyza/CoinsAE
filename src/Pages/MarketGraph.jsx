import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import DOMPurify from "dompurify";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import NavbarMarketGraph from "../Components/NavbarMarketGraph";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const MarketGraph = () => {
  const [coin, setCoin] = useState({});
  const params = useParams();

  const texturl = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  useEffect(() => {
    axios
      .get(texturl)
      .then((res) => {
        setCoin(res.data);
      })
      .catch((error) => {});
  }, []);
  const { coinId } = useParams();
  const [dataAPI, setDataAPI] = useState(null);
  const url = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=365`;

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const response = await axios.get(url);
        setDataAPI(response.data);
      } catch (error) {}
    };

    fetchApiData();
  }, [coinId, url]);

  let coinChartData = [];
  if (dataAPI) {
    coinChartData = dataAPI.prices.map((value) => ({
      x: value[0],
      y: value[1].toFixed(2),
    }));
  }

  const options = {
    responsive: true,
  };

  const data = {
    labels: coinChartData.map((value) => moment(value.x).format("MMM")),
    datasets: [
      {
        label: coinId,
        fill: true,
        data: coinChartData.map((value) => value.y),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <>
    <NavbarMarketGraph />
      <section className="Market-graph_container">
        <div className="description-text">
          <div className="coin-heading">
            {coin.image ? (
              <img className="coinLogo" src={coin.image.large} alt="" />
            ) : null}
            <div className="coin-name-symbol">
              <h1 className="coin-name-heading">{coin.name}</h1>
              {coin.symbol ? (
                <p className="coin-symbol">{coin.symbol.toUpperCase()}/USD</p>
              ) : null}
            </div>
          </div>
          <div className="description-text_innercontainer">
            <div className="coin-price">
              <h1>Current Price:</h1>
              {coin.market_data?.current_price ? (
                <h1>${coin.market_data.current_price.usd.toLocaleString()}</h1>
              ) : null}
            </div>
            <div className="content">
              <h1 className="rank-text">Rank: {coin.market_cap_rank}</h1>
              <h3>About</h3>
              <p
                className="coin-description"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    coin.description
                      ? coin.description.en.split(". ").slice(0, 3).join(". ") +
                          "."
                      : ""
                  ),
                }}
              ></p>
            </div>
          </div>
        </div>
        <div className="market-cap_container">
          <div className="market-cap_innertext">
              <div className="market-cap_text">
                <h4>24 Hour Low:</h4>
                {coin.market_data?.low_24h ? (
                  <p>${coin.market_data.low_24h.usd.toLocaleString()}</p>
                ) : null}
              </div>
              <div className="market-cap_text">
                <h4>24 Hour High:</h4>
                {coin.market_data?.high_24h ? (
                  <p>${coin.market_data.high_24h.usd.toLocaleString()}</p>
                ) : null}{" "}
              </div>
              <div className="market-cap_text">
                <h4>Market Cap:</h4>
                {coin.market_data?.market_cap ? (
                  <p>${coin.market_data.market_cap.usd.toLocaleString()}</p>
                ) : null}
              </div>
              <div className="market-cap_text">
                <h4>Circulating Supply:</h4>
                {coin.market_data ? (
                  <p>{coin.market_data.circulating_supply}</p>
                ) : null}
              </div>
          </div>
        </div>
        <div className="Market-chart">
          <Line options={options} data={data} />
        </div>
      </section>
    </>
  );
};

export default MarketGraph;
