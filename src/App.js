import "./App.css";
import { Route, Routes } from "react-router-dom";

// import componnents //
import Home from "./pages/home/Home";
import MoviesPage from "./pages/moviesPage/MoviesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/allmovies" element={<MoviesPage />} />
    </Routes>
  );
}

export default App;
