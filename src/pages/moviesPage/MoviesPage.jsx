import React, { useState } from "react";
import "./MoviesPage.css";
import { useContext } from "react";
import { ApiContext } from "../../contexts/apiContext/ApiContext";

// import components
import NavBar from "../../components/navBar/NavBar";
import MoviesPageList from "../../components/moviesPageList/MoviesPageList";

function MoviesPage() {
  let { dummyapiData } = useContext(ApiContext);
  let { dummyapiImage } = useContext(ApiContext);
  const [searchField, setSearchField] = useState("");

  const filteredData = dummyapiData.filter((data, index) => {
    return [
      data.movie.toLowerCase().includes(searchField),
      dummyapiImage[index],
    ];
  });

  const searchFunction = (event) => {
    const newSearch = event.target.value.toLowerCase();
    setSearchField(newSearch);
    console.log(searchField);
  };

  return (
    <>
      <NavBar />
      <input
        className="search-input"
        type="text"
        placeholder="Search"
        onChange={searchFunction}
      />

      <MoviesPageList data={[dummyapiData, dummyapiImage]} />
    </>
  );
}

export default MoviesPage;
