import React from "react";
import "./ShoppingPage.css";

// import components  //
import NavBar from "../../components/navBar/NavBar";
import ShopingMallDisplay from "../../components/shopingMallDisplay/ShopingMallDisplay";
function ShoppingPage() {
  return (
    <div>
      <NavBar />
      <ShopingMallDisplay />
    </div>
  );
}

export default ShoppingPage;
