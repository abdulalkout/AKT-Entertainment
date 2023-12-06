import React, { createContext, useContext, useState } from "react";
import dbUsers from "../../modules/users";

export const SignInContext = createContext();

function SignInContextProvider(props) {
  const [signIn, setSignIn] = useState(false);
  const [users, setUsers] = useState(dbUsers);
  const [cart, setCart] = useState([]);
  return (
    <SignInContext.Provider
      value={{ signIn, setSignIn, users, setUsers, cart, setCart }}
    >
      {props.children}
    </SignInContext.Provider>
  );
}

export default SignInContextProvider;
