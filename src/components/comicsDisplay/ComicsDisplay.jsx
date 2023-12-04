import React from "react";
import { useContext } from "react";
import "./ComicsDisplay.css";
import { MarvelApiContext } from "../../contexts/apiContext/MarvelApiContext";

function ComicsDisplay() {
  const { currentComic } = useContext(MarvelApiContext);
  let marvelComicPic = `${currentComic.thumbnail.path}.${currentComic.thumbnail.extension}`;
  return (
    <div>
      <img src={marvelComicPic} />
      <p>{currentComic.title}</p>
      {currentComic.creators.items.map((creator, index) => {
        return <p key={index}>{`${creator.name}  Role: ${creator.role}`}</p>;
      })}
      <p>{currentComic.textObjects[0].text}</p>
      <a href={currentComic.urls[0].url}>Go to Marvel Website</a>
    </div>
  );
}

export default ComicsDisplay;
