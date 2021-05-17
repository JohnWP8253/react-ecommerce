import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// imported components
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";
import Login from "./components/Login/Login"

function App() {
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
