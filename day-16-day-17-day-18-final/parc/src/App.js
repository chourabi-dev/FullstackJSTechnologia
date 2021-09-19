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
import VehiculesAddPage from './pages/VehiculeAdd';
import VehiculesUpdatePage from './pages/VehiculeUpdate';
import AddIntervention from './pages/AddIntervention';
import ListIntervention from './pages/ListInterventions';

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
        <Route path="/vehicules/add" component= { VehiculesAddPage } exact />
        <Route path="/vehicules/update/:id" component= { VehiculesUpdatePage } exact />
        <Route path="/vehicules/intervention/add/:id" component= { AddIntervention } exact />
        <Route path="/vehicules/intervention/list/:id" component= { ListIntervention } exact />
        
        


        

        
        
        
          
        </Switch>
      </Router>
    );
  }
}

export default App;
