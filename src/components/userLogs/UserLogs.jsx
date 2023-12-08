import React, { useState } from "react";
import "./UserLogs.css";
import { useContext } from "react";
import { SignInContext } from "../../contexts/userContext/SignInContext";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../contexts/apiContext/ProductsContext";
import WatchList from "../watch/WatchList";
import { WatchContext } from "../../contexts/userContext/watchContext";

function UserLogs() {
  const { setCurrentProduct } = useContext(ProductsContext);
  const { cart, setCart, totalPrice } = useContext(SignInContext);
  const { watchLater, setWatchLater } = useContext(WatchContext);

  const deletItem = (item) => {
    const newCart = cart.filter((filteredItem) => filteredItem.id !== item.id);
    setCart(newCart);
  };

  const deletWatchList = () => {
    setWatchLater([]);
  };

  return (
    <>
      <div>
        <p className="cart-title">Cart Items</p>
        {cart.length ? (
          <>
            <p className="price-tag">Total Price: ${totalPrice}</p>
            <div className="suggestions">
              {cart.map((item, index) => {
                return (
                  <div key={index}>
                    <Link
                      key={index}
                      to="/ShopItem"
                      onClick={() => {
                        setCurrentProduct(item);
                      }}
                    >
                      <img
                        className="suggestions-img"
                        src={item.thumbnailImage}
                      />
                    </Link>

                    <div className="item-info">
                      <p>Price: ${item.basePrice}</p>
                      <p>Items: {item.itemsNumber}</p>
                      <button
                        onClick={() => {
                          deletItem(item);
                        }}
                        className="delet-item"
                      >
                        Delet Item
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <div className="empty-cart-div">
            <p className="empty-cart-title">Your cart is empty</p>
            <Link className="shop-now-lik" to="/Shopping">
              Shop Now
            </Link>
          </div>
        )}
      </div>
      {watchLater.length ? (
        <div>
          <WatchList data={watchLater} />
          <button onClick={deletWatchList} className="delet-watch ">
            Delete History
          </button>
        </div>
      ) : null}
    </>
  );
}

export default UserLogs;
