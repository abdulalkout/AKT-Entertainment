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
  const [display, setDisplay] = useState({
    watchButton: "delet-watch",
  });

  const deletItem = (item) => {
    const newCart = cart.filter((filteredItem) => filteredItem.id !== item.id);
    setCart(newCart);
  };

  const deletWatchList = () => {
    setWatchLater([]);
    setDisplay((prevDisplay) => ({
      ...prevDisplay,
      [watchButton]: "",
    }));
  };

  return (
    <>
      <div>
        <p className="cart-title">Cart Items</p>
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
                  <img className="suggestions-img" src={item.thumbnailImage} />
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
      </div>
      {watchLater.length ? <WatchList data={watchLater} /> : null}
      <button onClick={deletWatchList} className="delet-watch">
        Delete History
      </button>
    </>
  );
}

export default UserLogs;
