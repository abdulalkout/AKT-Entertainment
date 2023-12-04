import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import ApiContextProvider from "./contexts/apiContext/ApiContext";
import MarvelApiContextProvider from "./contexts/apiContext/MarvelApiContext";
import UserContextProvider from "./contexts/userContext/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ApiContextProvider>
        <MarvelApiContextProvider>
          <UserContextProvider>
            <App />
          </UserContextProvider>
        </MarvelApiContextProvider>
      </ApiContextProvider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
