import "./App.css";
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    // BEM
    <Router>
      <div className="App">
        <Switch>
          {/* Checkout route */}
          <Route path="/checkout">
            {/* Header */}
            <Header />
            <h1>I am a checkout, smash the like button</h1>
          </Route>
          {/* Landing route */}
          <Route path="/">
            {/* Header */}
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
