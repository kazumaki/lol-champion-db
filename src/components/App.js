import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import About from './About';
import Home from './Home';
import ChampionSelect from './ChampionSelect';
import ChampionDetailsContainer from '../containers/ChampionDetailsContainer';

const App = () => (
  <Router>
    <Switch>
      <Route path="/champions">
        <ChampionSelect />
      </Route>
      <Route path="/champion/:id" component={ChampionDetailsContainer} />
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
