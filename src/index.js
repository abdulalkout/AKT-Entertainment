import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import ApiContextProvider from "./contexts/apiContext/ApiContext";
import MarvelApiContextProvider from "./contexts/apiContext/MarvelApiContext";
import WatchContextProvider from "./contexts/userContext/watchContext";
import ProductsContextProvider from "./contexts/apiContext/ProductsContext";
import SignInContextProvider from "./contexts/userContext/SignInContext";
import GamesContextProvider from "./contexts/apiContext/gamesContext";
import ProfileContextProvider from "./contexts/userContext/ProfileContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ApiContextProvider>
        <MarvelApiContextProvider>
          <WatchContextProvider>
            <ProductsContextProvider>
              <GamesContextProvider>
                <ProfileContextProvider>
                  <SignInContextProvider>
                    <App />
                  </SignInContextProvider>
                </ProfileContextProvider>
              </GamesContextProvider>
            </ProductsContextProvider>
          </WatchContextProvider>
        </MarvelApiContextProvider>
      </ApiContextProvider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
