import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import Comment from './components/Comment/Comment';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home'>
          <Home/>
        </Route>
        <Route path='/detail/:postDetails'>
          <Comment></Comment>
        </Route>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='*'>
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
