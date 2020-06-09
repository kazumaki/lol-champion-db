import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import About from './About';
import Home from './Home';
import ChampionSelect from './ChampionSelect';
import ChampionDetails from './ChampionDetails';

const App = () => (
  <Router>
    <Switch>
      <Route path="/champions">
        <ChampionSelect />
      </Route>
      <Route path="/champion/:id" component={ChampionDetails} />
      <Route path="/about" component={About} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
);

export default App;
