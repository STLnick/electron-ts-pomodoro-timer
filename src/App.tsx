import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Greeting from './views/Greeting';
import TimerDashboard from './views/TimerDashboard';
import NavBar from './components/NavBar';

export default function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => <Greeting name="Nick" />} />
        <Route exact path="/timer" component={TimerDashboard} />
      </Switch>
    </Router>
  );
}
