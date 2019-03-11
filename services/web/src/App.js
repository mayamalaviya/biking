import React, { Component } from 'react';
import './App.css';
import { Router, Switch, Route} from 'react-router-dom';
import { DestinationCard } from './destinations/DestinationCard';
import { DestinationForm } from './destinations/DestinationForm';
import { EquipmentCard } from './equipment/EquipmentCard';
import { EquipmentForm } from './equipment/EquipmentForm';
import { TripCard } from './trips/TripCard';
import { TripForm } from './trips/TripForm';
import  { Login } from './login/';
import { Home } from './home/';
import { history } from './_helpers';
import { PrivateRoute } from './_components';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div>            
              <Switch>
                <PrivateRoute exact path='/home' component={Home} />
                <PrivateRoute exact path='/destination' component={DestinationCard} />
                <PrivateRoute exact path='/destination/create' component={DestinationForm} />
                <PrivateRoute exact path='/destination/:id' component={DestinationForm} />
                <Route exact path='/' component={Login} />
              </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;