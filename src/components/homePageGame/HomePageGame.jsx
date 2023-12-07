import React from "react";
import { useContext } from "react";
import { GamesContext } from "../../contexts/apiContext/gamesContext";
import tishTisha from "../../images/Tish-Tisha.jpg";

function HomePageGame() {
  const { games } = useContext(GamesContext);

  return (
    <div>
      <p>sssssssssss</p>
      <img src={tishTisha} />
    </div>
  );
}

export default HomePageGame;
