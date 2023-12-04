import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

function UserContextProvider(props) {
  return (
    <UserContext.Provider value={{}}>{props.children}</UserContext.Provider>
  );
}

export default UserContextProvider;
