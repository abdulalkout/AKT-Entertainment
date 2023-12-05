import React, { useEffect } from "react";
import "./ShopingMallDisplay.css";
import { useContext, useState } from "react";
import { ProductsContext } from "../../contexts/apiContext/ProductsContext";

//  import components //
import ShopingMallCard from "./ShopingMallCard";

function ShopingMallDisplay() {
  const { mallData, setMallData } = useContext(ProductsContext);
  const [categoryCheckboxes, setCategoryCheckboxes] = useState({
    smartphone: false,
    tablet: false,
    laptop: false,
  });

  // function to handle the category check box //
  const handleCategoryCheckboxChange = (checkboxName) => {
    setCategoryCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [checkboxName]: !prevCheckboxes[checkboxName],
    }));
  };
  const filteredData = (mallItem) => {
    if (categoryCheckboxes.smartphone) {
      return mallItem.productCategory === "Smartphone";
    }
  };
  const filterMallData = () => {
    Object.keys(categoryCheckboxes).forEach((key) => {
      if (categoryCheckboxes[key] === true) {
        let newMallData = mallData.filter(filteredData);
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
          <p>product Category</p>
          <label for="Smartphone">
            Smartphone
            <input
              type="checkbox"
              id="Smartphone"
              name="Smartphone"
              checked={categoryCheckboxes.smartphone}
              onChange={() => handleCategoryCheckboxChange("smartphone")}
            />
          </label>
          <label for="Tablet">
            Tablet
            <input
              type="checkbox"
              id="Tablet"
              name="Tablet"
              checked={categoryCheckboxes.tablet}
              onChange={() => handleCategoryCheckboxChange("tablet")}
            />
          </label>
          <label for="Laptop">
            Laptop
            <input
              type="checkbox"
              id="Laptop"
              name="Laptop"
              checked={categoryCheckboxes.laptop}
              onChange={() => handleCategoryCheckboxChange("laptop")}
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
