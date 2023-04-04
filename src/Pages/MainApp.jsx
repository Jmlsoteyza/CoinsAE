import React, { useState, useEffect } from "react";
import Hero from "../Components/Hero";
import Markets from "../Components/Markets";
import axios from "axios";
import Service from "../Components/Service";
import Navbar from "../Components/Navbar";
import "../styles/style.css";
import Footer from "../Components/Footer";
import ContactUs from "../Components/ContactUs";

const MainApp = () => {
  const [coins, setCoins] = useState([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
        console.log(setCoins);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <Hero coins={coins} />
      <Markets coins={coins} />
      <Service />
      <ContactUs />
      <Footer />
    </React.Fragment>
  );
};

export default MainApp;
