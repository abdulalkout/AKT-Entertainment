import React, { useState, useReducer } from "react";
import "./HomePageGame.css";
import { useContext } from "react";
import { GamesContext } from "../../contexts/apiContext/gamesContext";

const reducer = (state, action) => {
  switch (action.type) {
    case 1:
      return {
        id: 0,
      };
    case 2:
      return {
        id: 1,
      };
    case 3:
      return {
        id: 2,
      };
    case 4:
      return {
        id: 3,
      };
  }
};

function HomePageGame() {
  const { games } = useContext(GamesContext);
  const [onHover, setOnHover] = useState("game-name-none");

  const [state, dispatch] = useReducer(reducer, {
    id: 0,
  });

  const openGameUrl = () => {
    window.open(games[state.id].url, "_blank");
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
          {games[state.id].name}
        </p>
        <img
          className="game-image"
          src={games[state.id].image}
          onMouseEnter={() => {
            setOnHover("game-name");
          }}
        />
      </div>

      <div className="reducer-buttons">
        <button
          className="game-buttons"
          onMouseEnter={() => {
            dispatch({ type: 1 });
          }}
        >
          Abdul
        </button>
        <button
          className="game-buttons"
          onMouseEnter={() => {
            dispatch({ type: 2 });
          }}
        >
          Jorge
        </button>
        <button
          className="game-buttons"
          onMouseEnter={() => {
            dispatch({ type: 3 });
          }}
        >
          Molud
        </button>
        <button
          className="game-buttons"
          onMouseEnter={() => {
            dispatch({ type: 4 });
          }}
        >
          Affaf
        </button>
      </div>
    </div>
  );
}

export default HomePageGame;
