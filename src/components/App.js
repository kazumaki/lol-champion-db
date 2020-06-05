import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import ChampionSelect from './ChampionSelect';
import style from '../styles/App.module.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/champions">
          <div className={style.container}>
            <ChampionSelect />
          </div>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;