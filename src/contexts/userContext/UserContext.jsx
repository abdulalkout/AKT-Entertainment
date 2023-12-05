import React, { createContext, useReducer } from "react";

export const UserContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "later":
      return {
        ...state,
        watchLater: [...state.watchLater, action.payload],
      };
    case "current":
      return {
        ...state,
        currentWatch: [...state.currentWatch, action.payload],
      };
    default:
      return state;
  }
};

const initialState = {
  currentWatch: [],
  watchLater: [],
};

function UserContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToWatchList = (type, item) => {
    dispatch({ type, payload: item });
  };

  return (
    <UserContext.Provider value={{ state, addToWatchList }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;

// const handleAddToWatchLater = () => {
//     const itemToAdd = [
//       { ...currentComic, name: currentComic.title, image: marvelComicPic },
//     ];
//     addToWatchList("later", itemToAdd);
//     console.log(itemToAdd);
//   };

// const { state } = useContext(UserContext);
