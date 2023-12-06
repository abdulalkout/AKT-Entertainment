import React from "react";
import "./ShopingMallDisplay.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/apiContext/ProductsContext";

function ShopingMallCard({ item }) {
  const { setCurrentProduct } = useContext(ProductsContext);
  return (
    <div className="products-div">
      <Link
        to="/ShopItem"
        onClick={() => {
          setCurrentProduct(item);
        }}
      >
        <img className="product-img" src={item.thumbnailImage} />
      </Link>
    </div>
  );
}

export default ShopingMallCard;
