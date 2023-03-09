import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

function Card({ item }) {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item?.attributes.isNew && <span>New keyboard</span>}
          <img src={import.meta.env.VITE_APP_UP__URL + item.attributes?.img?.data.attributes.url} alt="" className="mainImg" />
          <img src={import.meta.env.VITE_APP_UP__URL + item.attributes?.img2?.data.attributes.url} alt="" className="secondImg" />
        </div>
        <h3>{item?.attributes.title}</h3>
        <div className="prices">
          <h4>${item.OldPrice || item?.attributes.price + 20}</h4>
          <h4>${item.attributes.price}</h4>
        </div>
      </div>
    </Link>
  );
}

export default Card;
