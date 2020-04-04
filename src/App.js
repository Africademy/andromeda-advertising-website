import React from "react";
import Home from "./components/home";
import Login from "./components/login";
import Help from "./components/help";
import Blog from "./components/blog";
import Advertisers from "./components/advertisers";
import Publishers from "./components/publishers";
import Company from './components/company';
import Reesources from "./components/resources";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.scss";
import "./styles/mobile.scss";
import './styles/rwd.scss';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/help" component={Help} />
        <Route path="/blog" component={Blog} />
        <Route path='/advertisers' component={Advertisers} />
        <Route path="/publishers" component={Publishers} />
        <Route path='/company' component={Company} />
        <Route path='/resources' component={Reesources} />
      </div>
    </Router>
  );
}

export default App;
