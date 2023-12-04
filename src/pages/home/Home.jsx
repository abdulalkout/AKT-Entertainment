import React from "react";
import { useContext } from "react";
import { ApiContext } from "../../contexts/apiContext/ApiContext";

// import components //
import NavBar from "../../components/navBar/NavBar";
import MoviesPosterList from "../../components/moviePostersList/MoviesPosterList";
import MoviesList from "../../components/moviesList/MoviesList";

function Home() {
  let { typicodeData } = useContext(ApiContext);

  return (
    <div>
      <NavBar />
      <MoviesPosterList data={typicodeData} />
      <MoviesList />
    </div>
  );
}

export default Home;
