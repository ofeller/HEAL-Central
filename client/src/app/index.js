import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { Home, About, Calendar, Gallery } from '../pages'

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/calendar" exact component={Calendar} />
                <Route path="/gallery" exact component={Gallery} />
            </Switch>
    </Router>
  );
}

export default App
