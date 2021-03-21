import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar, ScrollToTop } from '../components'
import { Home, About, Calendar, Gallery, ExecBoard } from '../pages'


function App() {
  return (
    <Router>
    <ScrollToTop/>
      <NavBar />
      <div class="">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/calendar" exact component={Calendar} />
          <Route path="/gallery" exact component={Gallery} />
          <Route path="/execboard" exact component={ExecBoard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App
