import React from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./Cart.scss";

function Cart() {
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
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nostrum optio eligendi omnis suscipit deleniti natus, minima mollitia ea ex eos qui consequuntur? Quod ex fugiat enim labore nulla commodi?",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1627509493009-9249a2ad2459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      img2: "https://images.unsplash.com/photo-1627510444490-95637baaf6cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      title: "New Keyboard",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nostrum optio eligendi omnis suscipit deleniti natus, minima mollitia ea ex eos qui consequuntur? Quod ex fugiat enim labore nulla commodi?",
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
  ];

  return (
    <div className="cart">
      <h1>Products of your cart</h1>
      {data.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h2>{item.title}</h2>
            <p>{item.desc?.substring(0, 50)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>Subtotal</span>
        <span>$123</span>
      </div>
      <button>Proceed to checkout</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
}

export default Cart;
