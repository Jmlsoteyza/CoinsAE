import React, { useState } from "react";
import MarketItem from "./MarketItem";
import searchIcon from '../images/svgviewer 1.svg'

const Markets = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [marketPerPage, setMarketPerPage] = useState(10);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);

  const totalMarketPages = Math.ceil(props.coins.length / marketPerPage);

  const marketPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalMarketPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const marketOfLastPage = currentPage * marketPerPage;

  const marketOfFirstPage = marketOfLastPage - marketPerPage;

  let currentMarketItems = props.coins;

  if (searchInput.length > 0) {
    currentMarketItems = currentMarketItems.filter((coin) =>
      coin.name.toLowerCase().includes(searchInput.toLocaleLowerCase())
    );
  }

  currentMarketItems = currentMarketItems.slice(
    marketOfFirstPage,
    marketOfLastPage
  );

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    setLoading(true);
    setTimeout(() => {
      currentMarketItems = props.coins.filter((coin) =>
        coin.name.toLowerCase().includes(searchInput.toLocaleLowerCase())
      );
      setLoading(false);
    }, 500);
  };

  return (
    <section className="market-container">
    <section id="Market" className="Market-container">
      <div className="search-text">
        <h2>Market Overview</h2>
        <div className="market-icon_img">
        <img className="searchIcon" src={searchIcon} />
        <input
          className="search_bar"
          type="text"
          placeholder="Search Coin Name"
          onChange={handleChange}
          value={searchInput}
        />
        </div>
      </div>
      <div className="Market-names_container">
        <div className="Market-names">
          <p className="coin-text">Coin</p>
          <p>Price</p>
          <p>24h Change</p>
          <p>Market Cap</p>
          <p>7 Days</p> 
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : (
          currentMarketItems.map((coins) => {
            return <MarketItem coins={coins} key={coins.id} />;
          })
        )}
      </div>
      <div className="paginationButtons">
        <button
          className="nextbutton-style"
          onClick={() => handleClick(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        {marketPageNumbers().map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handleClick(pageNumber)}
            className={pageNumber === currentPage ? "active" : ""}
          >
            {pageNumber}
          </button>
        ))}
        <button
          className="previousbutton-style"
          onClick={() => handleClick(currentPage + 1)}
          disabled={currentPage === marketPageNumbers().length}
        >
          &gt;
        </button>
      </div>
    </section>
    </section>
  );
};

export default Markets;
