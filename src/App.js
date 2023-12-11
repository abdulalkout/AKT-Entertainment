import "./App.css";
import { Route, Routes } from "react-router-dom";

// import componnents //
import Home from "./pages/home/Home";
import MoviesPage from "./pages/moviesPage/MoviesPage";
import ComicsPage from "./pages/comicsPage/ComicsPage";
import ShoppingPage from "./pages/shoppingPage/ShoppingPage";
import ShopItemPage from "./pages/shopItemPage/ShopItemPage";
import SignInPage from "./pages/signInPage/SignInPage";
import Footer from "./components/footer/Footer";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allmovies" element={<MoviesPage />} />
        <Route path="/comics" element={<ComicsPage />} />
        <Route path="/Shopping" element={<ShoppingPage />} />
        <Route path="/ShopItem" element={<ShopItemPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
