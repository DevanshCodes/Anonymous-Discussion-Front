import React from 'react';
import {Route, Switch,HashRouter } from "react-router-dom";
import home from "./home/home"
import discussion from "./discussion/discussion"
import './App.css';

const Router = () => (
  <HashRouter basename='/'>
    <Switch>
      <Route exact path="/" component={home} />
      <Route exact path="/:username/:roomno" component={discussion} />
    </Switch>
  </HashRouter>
)

function App() {
  return (
    <div className="App">
      <Router/>
    </div>
  );
}

export default App;
