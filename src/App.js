import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// imported components
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";

function App() {
  return (
    // BEM
    <Router>
      <div className="App">
        {/* Header is always displayed*/}
        <Header />
        {/* Use switch to toggle between pages */}
        <Switch>
          {/* Checkout route */}
          <Route path="/checkout">
            <Checkout />
          </Route>
          {/* Landing route */}
          <Route path="/">
            {/* Home */}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
