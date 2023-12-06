import React from "react";
import "./WatchList.css";
import { useState, useContext } from "react";
import { SignInContext } from "../../contexts/userContext/SignInContext";
import WatchCard from "./WatchCard";

function WatchList({ data }) {
  const { signIn } = useContext(SignInContext);
  return (
    <div>
      {signIn ? (
        <>
          <p className="watch-header">Watch Later</p>
          <div className="watch-list">
            {data.map((item, index) => {
              return <WatchCard key={index} item={item} />;
            })}
          </div>
        </>
      ) : null}
    </div>
  );
}

export default WatchList;
