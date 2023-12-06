import React from "react";
import "./MoviesList.css";
import { useContext } from "react";
import { ApiContext } from "../../contexts/apiContext/ApiContext";
import { Link } from "react-router-dom";

function MoviesList() {
  let { dummyapiData } = useContext(ApiContext);
  let { dummyapiImage } = useContext(ApiContext);
  return (
    <>
      <div className="movies-list-header">
        <p className="movies-list-title">Movies</p>
        <Link to="/allmovies" className="movies-list-Link">
          See All
        </Link>
      </div>
      <div className="movies-list">
        {dummyapiData.map((movie, index) => {
          return (
            <div className="img-div" key={index}>
              {/* <p>{movie.movie}</p> */}
              <img
                style={{ height: "250px" }}
                className="movie-img"
                src={dummyapiImage[index]}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default MoviesList;
