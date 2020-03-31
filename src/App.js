import React from "react";
import Home from "./components/home";
import Login from "./components/login";
import Help from "./components/help";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.scss";
import "./styles/mobile.scss";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/help" component={Help} />
      </div>
    </Router>
  );
}

export default App;
