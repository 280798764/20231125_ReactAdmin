// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Layout from './Layout'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/" component={Layout} />
      </Switch>
    </Router>
  );
};

export default App;
