import React, { useEffect } from "react";
import "./SignInPage.css";
import { useState, useContext } from "react";
import { SignInContext } from "../../contexts/userContext/SignInContext";

// import components //
import NavBar from "../../components/navBar/NavBar";
import UserLogs from "../../components/userLogs/UserLogs";

function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [signoutDisplay, setSignoutDisplay] = useState({
    form: "signin-form",
    signout: "signout-none",
    form2: "signin-form-none",
    signup: "signup-title",
  });
  const { setSignIn, users, setUsers, signIn, user, setUser, cart } =
    useContext(SignInContext);

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
      }
    });
  };

  const handleSignout = () => {
    setSignIn(false);
    setSignoutDisplay({
      form: "signin-form",
      signout: "signout-none",
      form2: "signin-form-none",
      signup: "signup-title",
    });
  };

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
                <div className="subscription-version">
                  <p>Basic version</p>
                  <p>Shop Only</p>
                  <p>Price : Free</p>
                  <label htmlFor="free">
                    free
                    <input
                      type="checkbox"
                      id="free"
                      name="free"
                      // checked="{}"
                      // onChange={() => {}}
                    />
                  </label>
                </div>
                <div className="subscription-version">
                  <p>premium version</p>
                  <p>All inclusive</p>
                  <p>Price : $20/M</p>
                  <label htmlFor="premium">
                    premium
                    <input
                      type="checkbox"
                      id="premium"
                      name="premium"
                      // checked="{}"
                      // onChange={() => {}}
                    />
                  </label>
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
                  Sign In
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
