import "./App.css";
import { Route, Routes } from "react-router-dom";

// import componnents //
import Home from "./pages/home/Home";
import MoviesPage from "./pages/moviesPage/MoviesPage";
import ComicsPage from "./pages/comicsPage/ComicsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/allmovies" element={<MoviesPage />} />
      <Route path="/comics" element={<ComicsPage />} />
    </Routes>
  );
}

export default App;
