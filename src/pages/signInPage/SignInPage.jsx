import React, { useEffect } from "react";
import "./SignInPage.css";
import { useState, useContext } from "react";
import { SignInContext } from "../../contexts/userContext/SignInContext";
import { WatchContext } from "../../contexts/userContext/watchContext";
import { ProductsContext } from "../../contexts/apiContext/ProductsContext";

// import components //
import NavBar from "../../components/navBar/NavBar";
import UserLogs from "../../components/userLogs/UserLogs";

function SignInPage() {
  // useState user signUp
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [subscription, setSubscription] = useState();
  const [repeatPassword, setRepeatPassword] = useState("");

  // useState veiw handlers
  const [signoutDisplay, setSignoutDisplay] = useState({
    form: "signin-form",
    signout: "signout-none",
    form2: "signin-form-none",
    signup: "signup-title",
  });
  const [viewHover, setViewHover] = useState({
    basic: "subscription-version",
    premium: "subscription-version",
  });

  // Import contexts
  const { setSignIn, users, setUsers, signIn, setUser, cart, user, setCart } =
    useContext(SignInContext);
  const { watchLater, setWatchLater } = useContext(WatchContext);
  const { allMallData, setMallData } = useContext(ProductsContext);

  const checkUser = () => {
    users.map((user) => {
      if (user.email === email && user.password === password) {
        setSignIn(true);
        setSignoutDisplay({
          form: "signin-form-none",
          signout: "signout",
          form2: "signin-form-none",
          signup: "signup-title-none",
        });
        setUser(user);
        // console.log(user);
      }
    });
  };

  // const appendLogsForUser = () => {
  //   const userIndex = users.findIndex(
  //     (userInDB) => userInDB.email === user.email
  //   );
  //   console.log(userIndex);
  //   if (userIndex >= 0) {
  //     setUsers((prevUsers) => {
  //       const updatedUsers = [...prevUsers];

  //       updatedUsers[userIndex] = {
  //         ...updatedUsers[userIndex],
  //         watched: watchLater,
  //       };
  //     });
  //   }
  //   console.log(users);
  // };

  const handleSignout = () => {
    setSignIn(false);
    setSignoutDisplay({
      form: "signin-form",
      signout: "signout-none",
      form2: "signin-form-none",
      signup: "signup-title",
    });
    setUser((prevUser) => ({
      ...prevUser,
      watched: watchLater,
      cart: cart,
    }));

    setWatchLater([]);
    setCart([]);
    setMallData(allMallData);
    // console.log(user);
    // appendLogsForUser();
  };

  // useEffect(() => {
  //   // console.log(user.watched);
  //   console.log(user);
  // }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    checkUser();
  };

  const handleNewUserSubmit = (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      let newUser = {
        email: email,
        password: password,
        name: name,
        subscription: subscription,
      };
      setUsers([...users, newUser]);
      setSignoutDisplay({
        form: "signin-form-none",
        signout: "signout",
        form2: "signin-form-none",
        signup: "signup-title-none",
      });
      setSignIn(true);
      setUser(newUser);
    }
  };

  const showSignup = () => {
    setSignoutDisplay({
      form: "signin-form-none",
      signout: "signout-none",
      form2: "signin-form",
      signup: "signup-title-none",
    });
  };

  useEffect(() => {
    if (signIn) {
      setSignoutDisplay({
        form: "signin-form-none",
        signout: "signout",
        form2: "signin-form-none",
        signup: "signup-title-none",
      });
    }
  }, [signIn]);

  const handleView = (id) => {
    if (id === 1) {
      setViewHover((prevHover) => ({
        ...prevHover,

        basic: "subscription-version hover",
        premium: "subscription-version",
      }));
    } else if (id === 2) {
      setViewHover((prevHover) => ({
        ...prevHover,

        basic: "subscription-version",
        premium: "subscription-version hover",
      }));
    }
  };

  return (
    <div>
      <NavBar />
      {!signIn ? (
        <>
          <div className="sign-section">
            <form className={signoutDisplay.form} onSubmit={handleSubmit}>
              <p className="sign-header">SignIn</p>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button className="signin-button" type="submit">
                Sign In
              </button>
            </form>
            <form
              className={signoutDisplay.form2}
              onSubmit={handleNewUserSubmit}
            >
              {/* <p className="sign-header">SignUp</p> */}
              <div className="subscriptions">
                <div
                  className={viewHover.basic}
                  onClick={() => {
                    setSubscription(false);
                    handleView(1);
                  }}
                >
                  <div className="version-div ">
                    <p className="title-for-version">Basic version</p>
                    <p className="varsion-discription">Shop Only</p>
                    <p className="varsion-discription">Price : Free</p>
                  </div>
                </div>
                <div
                  className={viewHover.premium}
                  onClick={() => {
                    setSubscription(true);
                    handleView(2);
                  }}
                >
                  <div className="version-div">
                    <p className="title-for-version">premium version</p>
                    <p className="varsion-discription">All inclusive</p>
                    <p className="varsion-discription">Price : $20/M</p>
                  </div>
                </div>
              </div>

              <div className="sign-up-display">
                <label htmlFor="name">name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label htmlFor="Repeat password">Repeat Password:</label>
                <input
                  type="password"
                  id="Repeat password"
                  name="Repeat password"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                  required
                />

                <button className="signin-button" type="submit">
                  SignUp
                </button>
              </div>
            </form>
          </div>
          <p onClick={showSignup} className={signoutDisplay.signup}>
            Sign Up
          </p>
        </>
      ) : (
        <>
          <button
            onClick={handleSignout}
            className={signoutDisplay.signout}
            type="submit"
          >
            Sign Out
          </button>
          <UserLogs />
        </>
      )}
    </div>
  );
}

export default SignInPage;
