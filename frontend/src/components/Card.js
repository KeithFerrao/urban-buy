import React from "react";
import { useState } from "react";

const Card = (props) => {
  const { name, description, price, image } = props;

  return (
    <div>
      <div
        className="card"
        // style={{
        //   display: "flex",
        //   justifyContent: "flex-start",
        //   position: "absolute",
        //   left: "0",
        // }}
      >
        <img
          src={!image ? "https://images.emojiterra.com/google/android-pie/512px/1f45f.png" : image }
          className="card-img-top"
          alt={name}
          style={{ height: "200px", objectFit: "contain" }}
        />
        <div className="card-body">
          <h5 className="product-title">{name}</h5>
          <p
            className="description"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2, // limit to 2 lines
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "250px", // control width
            }}
          >
            {description}
          </p>
          <h5 className="product-price">₹ {price}</h5>
          <a href="#" className="btn btn-primary">
            Move to Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
