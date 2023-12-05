import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const ProductsContext = createContext();

function ProductsContextProvider(props) {
  const url = "https://dummyapi.online/api/products";
  const [mallData, setMallData] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setMallData(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <ProductsContext.Provider value={{ mallData, setMallData }}>
      {props.children}
    </ProductsContext.Provider>
  );
}

export default ProductsContextProvider;
