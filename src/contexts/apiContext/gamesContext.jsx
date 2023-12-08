import React, { useState, createContext } from "react";
import tishTisha from "../../images/Tish-Tisha.jpg";
import rps from "../../images/RPS.png";
import mg from "../../images/memoryGame.png";
import race from "../../images/Race.png";

export const GamesContext = createContext();

function GamesContextProvider(props) {
  const [games, setGames] = useState([
    {
      id: 1,
      name: "Tish-Tisha",
      creator: "Abdul",
      url: "https://steady-pudding-a379e9.netlify.app/",
      image: tishTisha,
    },
    {
      id: 2,
      name: "Rock Paper Scissors",
      creator: "Jorge",
      url: "https://rock-paper-scissors-cnk7.onrender.com/",
      image: rps,
    },
    {
      id: 3,
      name: "Kids-Memory",
      creator: "Mouloud",
      url: "https://memory-game-for-kids.onrender.com/",
      image: mg,
    },
    {
      id: 4,
      name: "Race-to-top",
      creator: "Affaf",
      url: "https://affaf04.github.io/Race-to-the-top/",
      image: race,
    },
  ]);

  return (
    <GamesContext.Provider value={{ games, setGames }}>
      {props.children}
    </GamesContext.Provider>
  );
}

export default GamesContextProvider;
