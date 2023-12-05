import React from "react";
import { useContext } from "react";
import { ApiContext } from "../../contexts/apiContext/ApiContext";

// module example
import Watch from "../../modules/watch";
// import components //
import NavBar from "../../components/navBar/NavBar";
import MoviesPosterList from "../../components/moviePostersList/MoviesPosterList";
import MoviesList from "../../components/moviesList/MoviesList";
import MarvelComicsList from "../../components/marvelComicsList/MarvelComicsList";
import WatchList from "../../components/watch/WatchList";

function Home() {
  let { typicodeData } = useContext(ApiContext);

  return (
    <div>
      <NavBar />
      {Watch.length ? <WatchList data={Watch} /> : null}
      <MoviesPosterList data={typicodeData} />
      <MoviesList />
      <MarvelComicsList />
    </div>
  );
}

export default Home;
