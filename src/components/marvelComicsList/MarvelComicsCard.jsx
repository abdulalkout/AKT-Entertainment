import React from "react";
import "./MarvelComicsList.css";
import { useState, useContext } from "react";
import { MarvelApiContext } from "../../contexts/apiContext/MarvelApiContext";
import { Link } from "react-router-dom";

function MarvelComicsCard({ data }) {
  const [onHover, setOnHover] = useState("marvel-title-none");
  const { setCurrentComic } = useContext(MarvelApiContext);
  let marvelComicPic = `${data.thumbnail.path}.${data.thumbnail.extension}`;
  return (
    <div className="marvel-card">
      <img
        onMouseOver={() => {
          setOnHover("marvel-title");
        }}
        className="marvel-img"
        src={marvelComicPic}
      />
      <Link
        to="/comics"
        onMouseOut={() => {
          setOnHover("marvel-title-none");
        }}
        onClick={() => {
          setCurrentComic(data);
        }}
        className={onHover}
      >
        {data.title}
      </Link>
    </div>
  );
}

export default MarvelComicsCard;
