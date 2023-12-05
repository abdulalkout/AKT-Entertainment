import React from "react";
import "./ShoppingMallSection.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function ShoppingMallSection() {
  const [onHover, setOnHover] = useState("shopping-link-none");
  return (
    <>
      <p className="section-header">Shopping Mall</p>
      <div className="shoping-section">
        <img
          onMouseOver={() => {
            setOnHover("shopping-link");
          }}
          onMouseOut={() => {
            setOnHover("shopping-link-none");
          }}
          className="ads-image"
          src={`https://cdn.mos.cms.futurecdn.net/hUQHCvvKAHtNGxtLiB8rjP.gif`}
        />
        <Link
          onMouseOver={() => {
            setOnHover("shopping-link");
          }}
          to="/Shopping"
          className={onHover}
        >
          Shop Now
        </Link>
      </div>
    </>
  );
}

export default ShoppingMallSection;

//3
