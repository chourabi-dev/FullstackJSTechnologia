import logo from './logo.svg';
import './App.css';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './pages/HomePage';
import MovieDetails from './pages/MovieDetails';
import NotFound from './pages/NotFound';

class App extends React.Component {
  constructor(props){
      super(props)
  }



  render(){
    return(
      <Router>
        <Switch>
          <Route path="/" component={ Home  } exact  />
          <Route path="/movies" component={ Home } exact  />
          <Route path="/movies/details/:test" component={ MovieDetails } exact  />
          <Route path="*" component={ NotFound }   />


        </Switch>
      </Router>
    );
  }

}

export default App;
