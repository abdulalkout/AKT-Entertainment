import React from "react";
import "./ShopingMallDisplay.css";

function ShopingMallCard({ item }) {
  return (
    <div className="products-div">
      <img className="product-img" src={item.thumbnailImage} />
    </div>
  );
}

export default ShopingMallCard;
