import React from "react";
import PosterCard from "./PosterCard";
import "./MoviesPosterList.css";

function MoviesPosterList({ data }) {
  return (
    <>
      <p className="poster-title">Comming soon</p>
      <div className="postersList">
        {data.map((poster, index) => {
          return <img className="poster" key={index} src={poster.Poster} />;
        })}
      </div>
    </>
  );
}

export default MoviesPosterList;
