import React, { useState, createContext } from "react";
import tishTisha from "../../images/Tish-Tisha.jpg";
import rps from "../../images/RPS.webp";

export const GamesContext = createContext();

function GamesContextProvider(props) {
  const [games, setGames] = useState([
    {
      id: 1,
      name: "Tish-Tisha",
      url: "https://steady-pudding-a379e9.netlify.app/",
      image: tishTisha,
    },
    {
      id: 2,
      name: "Rock Paper Scissors",
      url: "https://rock-paper-scissors-cnk7.onrender.com/",
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
