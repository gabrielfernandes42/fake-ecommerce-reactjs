import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import "./Product.scss";

function Product() {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://cdn.pixabay.com/photo/2023/01/23/23/20/altar-7739897_960_720.jpg",
    "https://cdn.pixabay.com/photo/2022/12/22/02/56/dog-7671355_960_720.jpg",
  ];

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
        </div>
        <div className="mainImage">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h2>Title</h2>
        <span className="price">$199</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          assumenda provident deserunt, quos quaerat magni placeat dicta illum
          pariatur dolores fuga debitis necessitatibus fugit modi, atque
          veritatis expedita nesciunt excepturi?
        </p>

        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon /> Add to Cart
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon /> Add to wish list
          </div>
          <div className="item">
            <BalanceIcon /> add to compare
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-shirt</span>
          <span>Tag: T-shirt , woman, top</span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Product;
