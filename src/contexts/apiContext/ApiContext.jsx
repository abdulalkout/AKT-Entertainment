import React, { createContext, useEffect, useState } from "react";
import dummyapiImage from "../../modules/dummyapiModule";

export const ApiContext = createContext();

function ApiContextProvider(props) {
  const [typicodeData, setTypicodeData] = useState([]);
  //   const [rickAndMortyData, setRickAndMortyData] = useState([]);
  const [dummyapiData, setDummyapiData] = useState([]);
  const url1 = "https://dummyapi.online/api/movies";
  const url2 =
    "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies";

  const url3 = "https://rickandmortyapi.com/api/episode";

  const getTypicodeApi = async () => {
    try {
      const response = await fetch(url2);
      const data = await response.json();
      setTypicodeData(data);
    } catch (err) {
      console.log(err);
      setTypicodeData([]);
    }
  };

  const getRickAndMortyApi = async () => {
    try {
      const response = await fetch(url1);
      const data = await response.json();
      setDummyapiData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTypicodeApi();
    getRickAndMortyApi();
  }, []);

  useEffect(() => {
    // console.log(typicodeData);
    // console.log(dummyapiData);
    // console.log(typicodeData);
    // dummyapiInsertImg();
  }, [typicodeData, dummyapiData]);

  return (
    <ApiContext.Provider value={{ typicodeData, dummyapiData, dummyapiImage }}>
      {props.children}
    </ApiContext.Provider>
  );
}

export default ApiContextProvider;
