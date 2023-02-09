import React, { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import "./Products.scss";

function Products() {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(0);
  const [sortPrice, setSortPrice] = useState(null);

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h3>Product Categories</h3>
          <div className="inputItem">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">shoes</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2">shirts</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2">pants</label>
          </div>
        </div>
        <div className="filterItem">
          <h3>Filter by Price:</h3>
          <div className="inoutItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{`R$${maxPrice},00`}</span>
          </div>
        </div>
        <div className="filterItem">
          <h3>Sort by:</h3>
          <div className="inpuItem">
            <input
              type="radio"
              id="asc"
              name="price"
              onChange={(e) => setSortPrice("asc")}
            />
            <label htmlFor="price">Price (Lowest first)</label>
          </div>
          <div className="inpuItem">
            <input
              type="radio"
              id="asc"
              name="price"
              onChange={(e) => setSortPrice("desc")}
            />
            <label htmlFor="price">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://preview.redd.it/3wtbp4482wx71.jpg?width=960&crop=smart&auto=webp&v=enabled&s=91da4251528743c90e1823074e35fbf12ada36ea"
          alt=""
        />
        <List catId={catId} maxPrice={maxPrice} sortPrice={sortPrice} />
      </div>
    </div>
  );
}

export default Products;
