import React from "react";
import "./MoviesPosterList.css";

function PosterCard({ poster }) {
  {
    return poster.Poster ? (
      <div className="poster">
        <img className="img-poster" src={poster.Poster} />
        <p className="poster-title">{poster.Title}</p>
        <p className="poster-title">{poster.Year}</p>
      </div>
    ) : null;
  }
}

export default PosterCard;
