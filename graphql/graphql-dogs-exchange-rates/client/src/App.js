import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Dogs from "./pages/Dogs";
import Dog from "./pages/Dog";
import ExchangeRates from "./pages/ExchangeRates";
import Home from './pages/Home'
import "./App.css";

const HomeLink = () => <p><Link to="/" className="App-link">Home</Link></p>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/dogs/:breed">
              <HomeLink />
              <Dog />
            </Route>
            <Route path="/dogs">
              <HomeLink />
              <Dogs />
            </Route>
            <Route path="/rates">
              <HomeLink />
              <ExchangeRates />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
