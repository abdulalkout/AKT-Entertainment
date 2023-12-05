import React from "react";
import { useContext } from "react";
import { ApiContext } from "../../contexts/apiContext/ApiContext";
import { WatchContext } from "../../contexts/userContext/watchContext";
// import components //
import NavBar from "../../components/navBar/NavBar";
import MoviesPosterList from "../../components/moviePostersList/MoviesPosterList";
import MoviesList from "../../components/moviesList/MoviesList";
import MarvelComicsList from "../../components/marvelComicsList/MarvelComicsList";
import WatchList from "../../components/watch/WatchList";

function Home() {
  let { typicodeData } = useContext(ApiContext);
  const { watchLater } = useContext(WatchContext);

  return (
    <div>
      <NavBar />
      {watchLater.length ? <WatchList data={watchLater} /> : null}
      <MoviesPosterList data={typicodeData} />
      <MoviesList />
      <MarvelComicsList />
    </div>
  );
}

export default Home;
