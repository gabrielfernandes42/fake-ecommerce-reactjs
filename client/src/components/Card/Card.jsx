import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

function Card({ item }) {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item.isNew && <span>New keyboard</span>}
          <img src={item.img} alt="" className="mainImg" />
          <img src={item.img2} alt="" className="secondImg" />
        </div>
        <h3>{item.title}</h3>
        <div className="prices">
          <h4>${item.oldPrice}</h4>
          <h4>${item.price}</h4>
        </div>
      </div>
    </Link>
  );
}

export default Card;
