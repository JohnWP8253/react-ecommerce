import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

// imported components
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";
import Login from "./components/Login/Login";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // only runs when app component loads...
    auth.onAuthStateChanged((authUser) => {
      console.log("The User is >>>>", authUser);

      if (authUser) {
        // the user just logged on / the use was logged in already
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM
    <Router>
      <div className="App">
        {/* Use switch to toggle between pages */}
        <Switch>
          {/* Login route */}
          <Route path="/login">
            <Login />
          </Route>
          {/* Checkout route */}
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          {/* Landing route */}
          <Route path="/">
            <Header />
            {/* Home */}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
