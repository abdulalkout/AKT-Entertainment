import React from "react";

function MoviesPageList({ data }) {
  return (
    <div>
      <div className="movies-page-list">
        {data[0].map((movie, index) => {
          return (
            <div className="movie-card" key={index}>
              <p className="movie-title">{movie.movie}</p>
              <img className="movie-img" src={data[1][index]} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MoviesPageList;
