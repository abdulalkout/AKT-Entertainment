import React, { createContext, useContext, useState } from "react";
import dbUsers from "../../modules/users";

export const SignInContext = createContext();

function SignInContextProvider(props) {
  const [signIn, setSignIn] = useState(false);
  const [users, setUsers] = useState(dbUsers);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  return (
    <SignInContext.Provider
      value={{
        signIn,
        setSignIn,
        users,
        setUsers,
        cart,
        setCart,
        totalPrice,
        setTotalPrice,
      }}
    >
      {props.children}
    </SignInContext.Provider>
  );
}

export default SignInContextProvider;
