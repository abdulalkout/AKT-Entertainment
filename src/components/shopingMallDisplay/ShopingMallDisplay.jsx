import React, { useEffect } from "react";
import "./ShopingMallDisplay.css";
import { useContext, useState } from "react";
import { ProductsContext } from "../../contexts/apiContext/ProductsContext";

//  import components //
import ShopingMallCard from "./ShopingMallCard";

function ShopingMallDisplay() {
  const { mallData, setMallData } = useContext(ProductsContext);
  const [categoryCheckboxes, setCategoryCheckboxes] = useState({
    Smartphone: false,
    Tablet: false,
    Laptop: false,
    Apple: false,
    Samsung: false,
    Lenovo: false,
    Graphite: false,
    Silver: false,
    Gold: false,
  });

  // function to handle the category check box //
  const handleCategoryCheckboxChange = (checkboxName) => {
    setCategoryCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [checkboxName]: !prevCheckboxes[checkboxName],
    }));
  };

  const filteredData = (mallItem, key) => {
    // return mallItem.productCategory === key;
    if (mallItem.productCategory === key) {
      return mallItem.productCategory === key;
    } else if (mallItem.brand === key) {
      return mallItem.brand === key;
    }
  };

  const filterMallData = () => {
    let newMallData = mallData;

    Object.keys(categoryCheckboxes).forEach((key) => {
      if (categoryCheckboxes[key] === true) {
        newMallData = newMallData.filter((mallItem) => {
          return filteredData(mallItem, key);
        });
        setMallData(newMallData);
      }
    });
  };

  useEffect(() => {
    filterMallData();
  }, [categoryCheckboxes]);

  return (
    <div className="mall-display">
      <div className="filter-div">
        <p className="div-title">Filter</p>
        <div className="product-category">
          <p className="search-title">product Category</p>
          <label htmlFor="Smartphone">
            Smartphone
            <input
              type="checkbox"
              id="Smartphone"
              name="Smartphone"
              checked={categoryCheckboxes.Smartphone}
              onChange={() => handleCategoryCheckboxChange("Smartphone")}
            />
          </label>
          <label htmlFor="Tablet">
            Tablet
            <input
              type="checkbox"
              id="Tablet"
              name="Tablet"
              checked={categoryCheckboxes.Tablet}
              onChange={() => handleCategoryCheckboxChange("Tablet")}
            />
          </label>
          <label htmlFor="Laptop">
            Laptop
            <input
              type="checkbox"
              id="Laptop"
              name="Laptop"
              checked={categoryCheckboxes.Laptop}
              onChange={() => handleCategoryCheckboxChange("Laptop")}
            />
          </label>
        </div>
        <div className="product-category">
          <p className="search-title">Brand Name</p>
          <label htmlFor="Apple">
            Apple
            <input
              type="checkbox"
              id="Apple"
              name="Apple"
              checked={categoryCheckboxes.Apple}
              onChange={() => handleCategoryCheckboxChange("Apple")}
            />
          </label>
          <label htmlFor="Samsung">
            Samsung
            <input
              type="checkbox"
              id="Samsung"
              name="Samsung"
              checked={categoryCheckboxes.Samsung}
              onChange={() => handleCategoryCheckboxChange("Samsung")}
            />
          </label>
          <label htmlFor="Lenovo">
            Lenovo
            <input
              type="checkbox"
              id="Lenovo"
              name="Lenovo"
              checked={categoryCheckboxes.Lenovo}
              onChange={() => handleCategoryCheckboxChange("Lenovo")}
            />
          </label>
        </div>
      </div>

      <div className="data-display-list">
        {mallData.map((item, index) => {
          return <ShopingMallCard key={index} item={item} />;
        })}
      </div>
    </div>
  );
}

export default ShopingMallDisplay;
