import React from "react";
import { useContext } from "react";
import { MarvelApiContext } from "../../contexts/apiContext/MarvelApiContext";

// --import components --//
import MarvelComicsCard from "./MarvelComicsCard";

function MarvelComicsList() {
  const { marvelApiComicsData } = useContext(MarvelApiContext);

  return (
    <>
      <p className="marvel-header">Marvel Comics</p>
      <div className="marvel-comics-list">
        {marvelApiComicsData.map((comic, index) => {
          return <MarvelComicsCard key={index} data={comic} />;
        })}
      </div>
    </>
  );
}

export default MarvelComicsList;
