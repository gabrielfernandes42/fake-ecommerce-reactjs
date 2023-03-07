import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import axios from "axios";
import { json } from "react-router-dom";

function FeaturedProducts({ type }) {
  const data = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1627509493009-9249a2ad2459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      img2: "https://images.unsplash.com/photo-1627510444490-95637baaf6cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      title: "New Keyboard",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1627509493009-9249a2ad2459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      img2: "https://images.unsplash.com/photo-1627510444490-95637baaf6cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      title: "New Keyboard",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1627509493009-9249a2ad2459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      img2: "https://images.unsplash.com/photo-1627510444490-95637baaf6cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      title: "New Keyboard",
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1627509493009-9249a2ad2459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      img2: "https://images.unsplash.com/photo-1627510444490-95637baaf6cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      title: "New Keyboard",
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
  ];

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(
          import.meta.env.VITE_APP_URL + "/products",
          {
            headers: {
              Authorization: "Bearer " + import.meta.env.VITE_APP_TOKEN,
            },
          }
        );
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

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
