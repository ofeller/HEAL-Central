import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { NavBar, Footer, ScrollToTop } from '../components'
import { Home, About, Calendar, Gallery, ExecBoard, AttendeesInsert, AttendeesList, AttendeesUpdate, SignUp, Login} from '../pages'

function App() {
  return (
    <Router>
    <ScrollToTop/>
      <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/calendar" exact component={Calendar} />
          <Route path="/gallery" exact component={Gallery} />
          <Route path="/execboard" exact component={ExecBoard} />
          <Route path="/attendees/list" exact component={AttendeesList}/>
          <Route path="/attendees/create" exact component={AttendeesInsert}/>
          <Route path="/attendees/update/:id" exact component={AttendeesUpdate}/>
          <Route path="/signup" exact component={SignUp}/>
          <Route path="/login" exact component={Login}/>
        </Switch>
        <Footer/>
    </Router>
  );
}

export default App
