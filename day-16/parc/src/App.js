import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from 'react';
import SignINPage from './pages/Signin';
import DashboardPage from './pages/Dashboard';
import VehiculesPage from './pages/Vehicules';

class App extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    return (
      <Router>
        <Switch >
        <Route path="/" component= { SignINPage } exact />
        <Route path="/signin" component= { SignINPage } exact />
        <Route path="/home" component= { DashboardPage } exact />
        <Route path="/vehicules" component= { VehiculesPage } exact />
        
        
          
        </Switch>
      </Router>
    );
  }
}

export default App;
