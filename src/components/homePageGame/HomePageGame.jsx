import React, { useState } from "react";
import "./HomePageGame.css";
import { useContext } from "react";
import { GamesContext } from "../../contexts/apiContext/gamesContext";

function HomePageGame() {
  const { games } = useContext(GamesContext);
  const [onHover, setOnHover] = useState("game-name-none");

  const openGameUrl = () => {
    window.open(games[0].url, "_blank");
  };

  return (
    <div className="game-section">
      <p className="games-header">Game Time</p>
      <div className="game-card" onClick={openGameUrl}>
        <p
          className={onHover}
          onMouseLeave={() => {
            setOnHover("game-name-none");
          }}
        >
          {games[0].name}
        </p>
        <img
          className="game-image"
          src={games[0].image}
          onMouseEnter={() => {
            setOnHover("game-name");
          }}
        />
      </div>
    </div>
  );
}

export default HomePageGame;
