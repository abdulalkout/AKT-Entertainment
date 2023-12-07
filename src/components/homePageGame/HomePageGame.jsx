import React from "react";
import "./HomePageGame.css";
import { useContext } from "react";
import { GamesContext } from "../../contexts/apiContext/gamesContext";

function HomePageGame() {
  const { games } = useContext(GamesContext);

  return (
    <div className="game-section">
      <p className="game-name">{games[0].name}</p>
      <img className="game-image" src={games[0].image} />
    </div>
  );
}

export default HomePageGame;
