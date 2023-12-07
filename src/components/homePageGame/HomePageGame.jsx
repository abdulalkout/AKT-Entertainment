import React, { useState, useReducer } from "react";
import "./HomePageGame.css";
import { useContext } from "react";
import { GamesContext } from "../../contexts/apiContext/gamesContext";
import { type } from "@testing-library/user-event/dist/type";

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
  }
};

function HomePageGame() {
  const { games } = useContext(GamesContext);
  const [onHover, setOnHover] = useState("game-name-none");
  const [stateNumber, setStateNumber] = useState(1);

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
          {/* <p>{games[state.id].creator}</p> */}
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
      </div>
    </div>
  );
}

export default HomePageGame;
