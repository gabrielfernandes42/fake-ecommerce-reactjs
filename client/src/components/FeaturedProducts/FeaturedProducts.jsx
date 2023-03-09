import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import axios from "axios";
import { json } from "react-router-dom";

function FeaturedProducts({ type }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          import.meta.env.VITE_APP_URL + "/products?populate=*",
          {
            headers: {
              Authorization: "Bearer " + import.meta.env.VITE_APP_TOKEN,
            },
          }
        );
        setData(res.data.data)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  console.log(data)

  return (
    <div className="featuredProducts">
      <div className="top">
        <h2>{type} products</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id quis rem
          vitae delectus, beatae, quisquam doloremque saepe voluptatibus libero
          illo omnis dignissimos similique repudiandae? Placeat commodi totam
          explicabo fugit unde!
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
