import React from "react";
import "./ShopItemPage.css";
import { useContext, useState } from "react";
import { ProductsContext } from "../../contexts/apiContext/ProductsContext";
import { SignInContext } from "../../contexts/userContext/SignInContext";

// import components //
import NavBar from "../../components/navBar/NavBar";

function ShopItemPage() {
  const { currentProduct } = useContext(ProductsContext);
  const { cart, setCart } = useContext(SignInContext);
  const [moreInfo, setMoreInfo] = useState("more-info-none");
  const [seeMore, setMore] = useState("see-more");

  const changeDisplay = (display) => {
    setMore(display);
  };

  const handleCartChange = () => {
    setCart([...cart, currentProduct]);
    console.log(cart);
  };

  return (
    <div>
      <NavBar />
      <div className="product-card-display">
        <img className="product-image" src={currentProduct.thumbnailImage} />
        <div className="basic-info">
          <p className="brand">Brand: {currentProduct.brand}</p>
          <p className="description">
            Description: {currentProduct.description}
          </p>
          <p className="description">Price: ${currentProduct.basePrice}</p>
          <p
            className={seeMore}
            onClick={() => {
              setMoreInfo("more-info");
              changeDisplay("see-more-none");
            }}
          >
            See more
          </p>

          <div className={moreInfo}>
            {currentProduct.stock ? (
              <p>In Stock: {currentProduct.stock}</p>
            ) : null}
            <div className="options">
              <p className="title">Color Options :</p>
              {currentProduct.colorOptions.map((color, i) => {
                return (
                  <div key={i}>
                    <label htmlFor="color">
                      {color}
                      <input
                        className="inputs-check"
                        type="checkbox"
                        id="color"
                        name="color"
                      />
                    </label>
                  </div>
                );
              })}
            </div>
            <div className="options">
              <p className="title">Storage Options :</p>
              {currentProduct.storageOptions.map((store, i) => {
                return (
                  <div key={i}>
                    <label htmlFor="color">
                      {store}
                      <input
                        className="inputs-check"
                        type="checkbox"
                        id="store"
                        name="store"
                      />
                    </label>
                  </div>
                );
              })}
            </div>
            <p
              className="see-more"
              onClick={() => {
                setMoreInfo("more-info-none");
                changeDisplay("see-more");
              }}
            >
              see less
            </p>
          </div>

          <button onClick={handleCartChange} className="add-to-cart">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShopItemPage;
