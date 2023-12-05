import React, { createContext, useState } from "react";

export const WatchContext = createContext();

function WatchContextProvider(props) {
  const [watchLater, setWatchLater] = useState([]);
  const [watched, setWatched] = useState([]);
  return (
    <WatchContext.Provider
      value={{ setWatchLater, setWatched, watchLater, watched }}
    >
      {props.children}
    </WatchContext.Provider>
  );
}

export default WatchContextProvider;
