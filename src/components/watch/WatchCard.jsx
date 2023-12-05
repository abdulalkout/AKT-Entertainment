import React from "react";
import "./WatchList.css";
import { useState, useContext } from "react";
import { MarvelApiContext } from "../../contexts/apiContext/MarvelApiContext";
import { Link } from "react-router-dom";

function WatchCard({ item }) {
  const [onHover, setOnHover] = useState("marvel-title-none");
  const { setCurrentComic } = useContext(MarvelApiContext);
  return (
    <div>
      <div className="watch-card">
        <img
          onMouseOver={() => {
            setOnHover("watch-title");
          }}
          className="watch-img"
          src={item.image}
        />
        <Link
          to="/comics"
          onMouseOut={() => {
            setOnHover("watch-title-none");
          }}
          onClick={() => {
            setCurrentComic(item);
          }}
          className={onHover}
        >
          {item.name}
        </Link>
      </div>
    </div>
  );
}

export default WatchCard;
