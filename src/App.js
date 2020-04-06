import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import home from "./home/home"
import discussion from "./discussion/discussion"
import './App.css';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={home} />
      <Route exact path="/:username" component={discussion} />
    </Switch>
  </BrowserRouter>
)

function App() {
  return (
    <div className="App">
      <Router/>
    </div>
  );
}

export default App;
