import React from "react";
import { useContext } from "react";
import { ApiContext } from "../../contexts/apiContext/ApiContext";

// import components //
import NavBar from "../../components/navBar/NavBar";
import MoviesPosterList from "../../components/moviePostersList/MoviesPosterList";
import MoviesList from "../../components/moviesList/MoviesList";
import MarvelComicsList from "../../components/marvelComicsList/MarvelComicsList";

function Home() {
  let { typicodeData } = useContext(ApiContext);

  return (
    <div>
      <NavBar />
      <MoviesPosterList data={typicodeData} />
      <MoviesList />
      <MarvelComicsList />
    </div>
  );
}

export default Home;
