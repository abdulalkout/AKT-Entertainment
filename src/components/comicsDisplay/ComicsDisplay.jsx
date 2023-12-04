import React, { useState } from "react";
import { useContext } from "react";
import "./ComicsDisplay.css";
import { MarvelApiContext } from "../../contexts/apiContext/MarvelApiContext";

function ComicsDisplay() {
  const { currentComic } = useContext(MarvelApiContext);
  let marvelComicPic = `${currentComic.thumbnail.path}.${currentComic.thumbnail.extension}`;
  const [creators, setCreators] = useState(false);

  const openCreator = () => {
    return currentComic.creators.items.map((creator, index) => {
      return (
        <p
          onClick={showCreator}
          className="comic-creators"
          key={index}
        >{`${creator.name}  Role: ${creator.role}`}</p>
      );
    });
  };

  const showCreator = () => {
    setCreators(!creators);
  };

  return (
    <div className="comic-display">
      <img className="comic-img" src={marvelComicPic} />
      <div className="comic-info">
        <p className="comic-title">{currentComic.title}</p>
        <p>{currentComic.textObjects[0].text}</p>

        {creators ? (
          openCreator()
        ) : (
          <p onClick={showCreator} className="see-creator">
            see creators
          </p>
        )}

        <a className="marvel-website" href={currentComic.urls[0].url}>
          Go to Marvel Website
        </a>
        <br />
        <button className="add-later">add to whatch later</button>
      </div>
    </div>
  );
}

export default ComicsDisplay;
