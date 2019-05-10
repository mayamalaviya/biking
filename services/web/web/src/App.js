import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Switch, Route } from 'react-router-dom';
import { history } from './_helpers';
import { PrivateRoute } from './_components/PrivateRoute';
import DestinationForm from './destinations/DestinationForm';
import EquipmentForm from './equipment/EquipmentForm';
import { Login } from './login';
import { Home } from './home';
import TripForm from './trips/TripForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history = {history}>
          <div>
            <Switch>
              <PrivateRoute exact path = '/' component = { Login } />
              <PrivateRoute exact path = '/home' component={ Home } />
              <PrivateRoute exact path = 'destinations/create' component={DestinationForm} />
              <PrivateRoute exact path = 'equipment/create' component={EquipmentForm} />
              <PrivateRoute exact path = 'trips/create' component = {TripForm} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
