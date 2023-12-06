import React, { createContext, useState } from "react";
import dbUsers from "../../modules/users";

export const SignInContext = createContext();

function SignInContextProvider(props) {
  const [signIn, setSignIn] = useState(false);
  const [users, setUsers] = useState(dbUsers);
  return (
    <SignInContext.Provider value={{ signIn, setSignIn, users, setUsers }}>
      {props.children}
    </SignInContext.Provider>
  );
}

export default SignInContextProvider;
