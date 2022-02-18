import React from "react";
import { numberWithCommas } from "./NumberFormat";

const Modal = (props) => {
  const {
    image,
    name,
    symbol,
    current_price,
    market_cap_rank,
    market_cap,
    low_24h,
    high_24h,
  } = props.modal;
  const items = [
    { key: "Market Cap", value: `₱ ${numberWithCommas(market_cap)}` },
    { key: "Market Cap Rank", value: `# ${market_cap_rank}` },
    { key: "24h Low", value: `₱ ${numberWithCommas(low_24h)}` },
    { key: "24h High", value: `₱ ${numberWithCommas(high_24h)}` },
  ];
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <div className="modal-title">
          <p className="badge">Rank #{market_cap_rank}</p>
          <img
            onClick={() => props.setModal(null)}
            src={require("../../../assets/close.png")}
          />
        </div>
        <div className="modal-header">
          <img src={image} />
          <div>
            <p>
              <strong>{`${name} (${symbol.toUpperCase()})`}</strong>
            </p>
            <p>&#8369; {numberWithCommas(current_price)}</p>
          </div>
        </div>
        <div className="modal-body">
          {items &&
            items.map((data, index) => (
              <div className="items" key={index}>
                <p>{data["key"]}</p>
                <p>{data["value"]}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
