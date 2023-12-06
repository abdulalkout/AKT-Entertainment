import React from "react";
import "./WatchList.css";
import { useState, useContext } from "react";
import { MarvelApiContext } from "../../contexts/apiContext/MarvelApiContext";
import WatchCard from "./WatchCard";

function WatchList({ data }) {
  return (
    <div>
      <p className="watch-header">Watch Later</p>
      <div className="watch-list">
        {data.map((item, index) => {
          return <WatchCard key={index} item={item} />;
        })}
      </div>
    </div>
  );
}

export default WatchList;
