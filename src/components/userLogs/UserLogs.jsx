import React from "react";
import "./UserLogs.css";
import { useContext } from "react";
import { SignInContext } from "../../contexts/userContext/SignInContext";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../contexts/apiContext/ProductsContext";

function UserLogs() {
  const { setCurrentProduct } = useContext(ProductsContext);
  const { cart, setCart, totalPrice, setTotalPrice } =
    useContext(SignInContext);

  const deletItem = (item) => {
    const newCart = cart.filter((filtereditem, i) => {
      if (filtereditem.id !== item.id) {
        return item;
      }
    });
    cart.map((item) => {
      setTotalPrice(totalPrice + item.basePrice);
    });
    setCart(newCart);
  };

  return (
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
  );
}

export default UserLogs;
