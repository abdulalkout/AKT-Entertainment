import React, { useState, createContext } from "react";
import tishTisha from "../../images/Tish-Tisha.jpg";

export const GamesContext = createContext();

function GamesContextProvider(props) {
  const [games, setGames] = useState([
    {
      id: 1,
      name: "Tish-Tisha",
      url: "https://steady-pudding-a379e9.netlify.app/",
      image: tishTisha,
    },
  ]);

  return (
    <GamesContext.Provider value={{ games, setGames }}>
      {props.children}
    </GamesContext.Provider>
  );
}

export default GamesContextProvider;
