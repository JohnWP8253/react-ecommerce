import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
          <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

          <button className="login__signInBtn">Sign in</button>
        </form>

        <p>By signing in, you agree to Amazon FAKE CLONE Conditions of use & Sale. Please see our Privacy Notice, out Cookies Notice and out Interest-Based Ads Notice.</p>

        <button className="login__registerBtn">Create your Amazon Account</button>
      </div>
    </div>
  );
}

export default Login;
