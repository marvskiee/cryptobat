import React from "react";
import { numberWithCommas } from "./NumberFormat";
export default function Card(props) {
  const {
    image,
    name,
    price_change_percentage_24h,
    current_price,
    market_cap_rank,
  } = props.data;
  const { data, setModal } = props;
  return (
    <div className="card" onClick={() => setModal(data)}>
      <p className="coin-rank">{market_cap_rank}</p>
      <img alt="coin_icon" src={image} />
      <div>
        <p className="card-title">{name}</p>
        <p className="coin-price">&#8369; {numberWithCommas(current_price)}</p>
        <p
          className={
            price_change_percentage_24h > 0
              ? "coin-price-increased"
              : "coin-price-decreased"
          }
        >
          {price_change_percentage_24h} %
        </p>
      </div>
    </div>
  );
}
