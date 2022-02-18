// import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";
import Logo from "../../assets/logo.svg";
import Modal from "./components/Modal";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(null);
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=php&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const changeHandler = (e) => {
    const value = e.target.value;
    setSearch(value);
  };
  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="wrapper">
      {modal && <Modal modal={modal} setModal={setModal} />}
      <header>
        <img alt="logo_icon" src={Logo} />
      </header>
      <div className="search">
        <div>
          <input
            type="text"
            placeholder="Search "
            value={search}
            onChange={changeHandler}
          />
          {search.length > 0 && (
            <img
              src={require("../../assets/close.png")}
              onClick={() => setSearch("")}
            />
          )}
        </div>
      </div>
      <div className="coin-list">
        {filteredCoins &&
          filteredCoins.map((data, index) => (
            <Card setModal={setModal} data={data} key={index} />
          ))}
      </div>
      <div className="pageScroll">
        <a href="/#">
          <img alt="pageup_icon" src={require("../../assets/pagup.png")} />
        </a>
      </div>
    </div>
  );
};
export default Coins;
