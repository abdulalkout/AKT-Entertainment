import React, { createContext, useEffect, useState } from "react";
import CryptoJS from "crypto-js";

export const MarvelApiContext = createContext();

function MarvelApiContextProvider(props) {
  const [marvelApiComicsData, setMarvelApiComicsData] = useState([]);
  const [currentComic, setCurrentComic] = useState();
  const pubkey = "2ec7b3e2e894bdeaf0edbbcb825bcf2b";
  const privkey = "a8032898989c2d2e04817f63d9a45072661c1111";
  const ts = 1;

  const generateHash = (ts, pubkey, privkey) => {
    const hash = CryptoJS.MD5(ts + privkey + pubkey).toString();
    return hash;
  };

  const urlMarvel = `http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${pubkey}&hash=${generateHash(
    ts,
    pubkey,
    privkey
  )}`;

  const getMarvelApi = async () => {
    try {
      const response = await fetch(urlMarvel);
      const data = await response.json();
      setMarvelApiComicsData(data.data.results);
      // console.log(data);
    } catch (err) {
      setMarvelApiComicsData([]);
      console.log(err);
    }
  };

  useEffect(() => {
    getMarvelApi();
  }, []);

  useEffect(() => {}, []);

  return (
    <MarvelApiContext.Provider
      value={{ marvelApiComicsData, setCurrentComic, currentComic }}
    >
      {props.children}
    </MarvelApiContext.Provider>
  );
}

export default MarvelApiContextProvider;
