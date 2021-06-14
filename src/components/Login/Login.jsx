import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";

function Login() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    // stops page from refeshing
    e.preventDefault();

    // firebase logic here.
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    // firebase logic coded here.
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          // if authenticated, sends to homepage
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      {/* Amazon link */}
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={signIn} type="submit" className="login__signInBtn">
            Sign in
          </button>
        </form>

        <p>
          By signing in, you agree to Amazon FAKE CLONE Conditions of use &
          Sale. Please see our Privacy Notice, out Cookies Notice and out
          Interest-Based Ads Notice.
        </p>

        <button onClick={register} type="submit" className="login__registerBtn">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
