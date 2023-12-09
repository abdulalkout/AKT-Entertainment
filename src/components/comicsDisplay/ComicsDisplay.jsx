import React, { useState, useContext } from "react";
import "./ComicsDisplay.css";
import { MarvelApiContext } from "../../contexts/apiContext/MarvelApiContext";
import { WatchContext } from "../../contexts/userContext/watchContext";
import { SignInContext } from "../../contexts/userContext/SignInContext";

function ComicsDisplay() {
  const { currentComic } = useContext(MarvelApiContext);
  let marvelComicPic = `${currentComic.thumbnail.path}.${currentComic.thumbnail.extension}`;
  const [creators, setCreators] = useState(false);
  const { signIn, user } = useContext(SignInContext);
  const [showVideo, setShowVideo] = useState({
    video: "video-style-none",
    content: "comic-display",
  });

  const { setWatchLater, watchLater } = useContext(WatchContext);
  const video =
    "https://i.pinimg.com/originals/76/04/f4/7604f43aca40241444f4e35202d032ea.gif";

  const handleWatching = () => {
    setWatchLater([
      ...watchLater,
      { ...currentComic, name: currentComic.title, image: marvelComicPic },
    ]);
    // console.log(watchLater);
  };

  const handleSignIn = () => {
    if (signIn && user.subscription) {
      handleWatching();
    } else {
      return setWatchLater([...watchLater]);
    }
    setShowVideo({
      video: "video-style",
      content: "comic-display-none",
    });
  };

  const handledisplay = () => {
    setShowVideo({
      video: "video-style-none",
      content: "comic-display",
    });
  };

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
    <>
      <div className={showVideo.content}>
        <img className="comic-img" src={marvelComicPic} />
        <div className="comic-info">
          <p className="comic-title">{currentComic.title}</p>
          <p className="comic-story">
            {currentComic.textObjects.length
              ? currentComic.textObjects[0].text
              : "No description available"}
          </p>

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
          <button onClick={handleSignIn} className="add-later">
            Watch Now
          </button>
        </div>
      </div>

      <div className={showVideo.video}>
        <img className="video-display" src={video} />
        <button onClick={handledisplay} className="add-later stop-wathcing">
          Stop
        </button>
      </div>
    </>
  );
}

export default ComicsDisplay;
