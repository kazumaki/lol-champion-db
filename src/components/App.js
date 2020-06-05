import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import ChampionsList from './ChampionsList';
import SearchChampionForm from "./SearchChampionForm";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/champions">
          <SearchChampionForm />
          <ChampionsList />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;