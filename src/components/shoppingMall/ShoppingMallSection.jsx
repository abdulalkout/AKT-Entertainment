import React from "react";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/apiContext/ProductsContext";

function ShoppingMallSection() {
  const { mallData } = useContext(ProductsContext);
  return (
    <div>
      <p>Shop Now</p>
      <img src={`${mallData[0].thumbnailImage}`} />
    </div>
  );
}

export default ShoppingMallSection;
