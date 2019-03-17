import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Switch, Route } from 'react-router-dom';
import { history } from './_helpers';
import { PrivateRoute } from './_components/PrivateRoute';
import DestinationForm from './destinations/DestinationForm';
import EquipmentForm from './equipment/EquipmentForm';
import { Home } from './home';
import TripForm from './trips/TripForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history = {history}>
          <div>
            <Switch>
              <PrivateRoute exact path = '/home' component={ Home } />
              <PrivateRoute exact path = 'destinations/create' component={DestinationForm} />
              <PrivateRoute exact path = 'equipment/create' component={EquipmentForm} />
              <PrivateRoute exact path = 'trips/create' component = {TripForm} />
            </Switch>
          </div>
        </Router>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
