import React, {Component} from 'react'
import { Route, Redirect, Switch, Link } from 'react-router-dom'
import axios from 'axios'

import './App.css';

import SearchBar from './components/SearchBar';
import TripList from './components/TripList';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import FlashMessages from './components/FlashMessages';
import NotFound from './components/NotFound';
import SavedTrips from './components/SavedTrips';
import DestinationForm from './components/DestinationForm';
import DestinationList from './components/DestinationForm';
import EquipmentForm from './components/EquipmentForm';
import EquipmentList from './components/EquipmentList';
import TripForm from './components/TripForm';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      trips: [],
      equipments: [],
      destinations: [],
      saved: [],
      flashMessages: [],
      isAuthenticated: false
    }
    this.registerUser = this.registerUser.bind(this)
    this.loginUser = this.loginUser.bind(this)
    this.logoutUser = this.logoutUser.bind(this)
    this.deleteFlashMessage = this.deleteFlashMessage.bind(this)
    this.createFlashMessage = this.createFlashMessage.bind(this)
    this.saveTrip = this.saveTrip.bind(this)
    this.getTrips = this.getTrips.bind(this)
    this.saveDestination = this.saveDestination.bind(this)
    this.saveEquipment = this.saveEquipment.bind(this)
    this.getDestinations = this.getDestinations.bind(this)
    this.getEquipment = this.getEquipment.bind(this)
  }

  createFlashMessage (text, type = 'success') {
    const message = { text, type }
    this.setState({
      flashMessages: [...this.state.flashMessages, message]
    })
  }
  deleteFlashMessage (index) {
    if (index > 0) {
      this.setState({
        flashMessages: [
          ...this.state.flashMessages.slice(0, index),
          ...this.state.flashMessages.slice(index + 1)
        ]
      })
    } else {
      this.setState({
        flashMessages: [...this.state.flashMessages.slice(index + 1)]
      })
    }
  }

  registerUser (userData, callback) {
    return axios.post('http://localhost:3000/users/register', userData)
    .then((res) => {
      window.localStorage.setItem('authToken', res.data.token)
      window.localStorage.setItem('user', res.data.user)
      this.setState({ isAuthenticated: true })
      this.createFlashMessage('You successfully registered! Welcome!')
      this.props.history.push('/')
      this.getTrips()
    })
    .catch((error) => {
      const errorMessage = error.response.data.error
      callback(errorMessage)
    })
  }

  loginUser (userData, callback) {
    return axios.post('http://localhost:3000/users/login', userData)
    .then((res) => {
      window.localStorage.setItem('authToken', res.data.token)
      window.localStorage.setItem('user', res.data.user)
      this.setState({ isAuthenticated: true })
      this.createFlashMessage('You successfully logged in! Welcome!')
      this.props.history.push('/')
      this.getTrips()
      this.getEquipment()
    })
    .catch((error) => {
      callback('Something went wrong')
    })
  }

  logoutUser (e) {
    e.preventDefault()
    window.localStorage.clear()
    this.setState({ isAuthenticated: false })
    this.props.history.push('/')
    this.createFlashMessage('You are now logged out.')
  }

  getCurrentUser () {
    return window.localStorage.user
  }

  searchTrips(term) {
    const options = {
        url: 'http://localhost:3001/user',
        method: 'get',
        headers: {
           'Content-Type': 'application/json',
           Authorization: `Bearer ${window.localStorage.authToken}`
        }
    };
    return axios(options)
    .then((res) => {
        this.setState({ trips: res.data.data });
    })
    .catch((err) => { console.log(err); })
  }

  getTrips() {
    const options = {
      url: 'http://localhost:3001/user',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${window.localStorage.authToken}`
      }
    };
    return axios(options)
    .then((res) => {
      this.setState({ saved: res.data.data });
    })
    .catch((err) => { console.log(err); })
  }

  saveTrip (trip) {
    const options = {
      url: 'http://localhost:3001/trips',
      method: 'post',
      data: {
        name: trip.name,
        state: trip.state,
        country: trip.country,
        notes: trip.notes,
        month: trip.month,
        year: trip.year,
        days: trip.days,
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${window.localStorage.authToken}`
      }
    };
    return axios(options)
    .then((res) => { this.getTrips() })
    .catch((error) => { console.log(error); })
  }
  saveDestination (destination) {
    const options = {
      url: 'http://localhost:3001/destinations',
      method: 'post',
      data: {
        added_by: this.getCurrentUser(),
        name: destination.name,
        summary: destination.summary,
        detail: destination.detail,
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${window.localStorage.authToken}`
      }
    };
    return axios(options)
    .then((res) => { this.getDestinations() })
    .catch((error) => { console.log(error); })
  }
  getDestinations() {
    const options = {
      url: 'http://localhost:3001/destinations',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${window.localStorage.authToken}`
      }
    };
    return axios(options)
    .then((res) => {
      this.setState({ saved: res.data.data });
    })
    .catch((err) => { console.log(err); })
  }
  saveEquipment (equipment) {
    const options = {
      url: 'http://localhost:3001/equipment',
      method: 'post',
      data: {
        title: equipment
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${window.localStorage.authToken}`
      }
    };
    return axios(options)
    .then((res) => { this.getEquipment() })
    .catch((error) => { console.log(error); })
  }
  getEquipment() {
    const options = {
      url: 'http://localhost:3001/equipment',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${window.localStorage.authToken}`
      }
    };
    return axios(options)
    .then((res) => {
      this.setState({ saved: res.data.data });
    })
    .catch((err) => { console.log(err); })
  }
  
  render () {
    const {isAuthenticated, flashMessages} = this.state
    return (
      <div className='App container'>
        <br/>
        <FlashMessages
          deleteFlashMessage={this.deleteFlashMessage}
          messages={flashMessages} />
        <Switch>
          <Route exact path='/' render={() => (
            isAuthenticated
            ? <div className="container text-center">
                <h1>Trip Search</h1>
                <SearchBar searchTrips={this.searchTrips.bind(this)} />
                <a href="" onClick={this.logoutUser}>Logout</a>&nbsp;&#124;&nbsp;<Link to='/collection'>Collection</Link>
                <br/><br/><br/>
                <TripList
                  trips={this.state.trips}
                  isAuthenticated={isAuthenticated}
                  getCurrentUser={this.getCurrentUser}
                  saveTrip={this.saveTrip}
                />
              </div>
            : <Redirect to={{
              pathname: '/login'
            }} />
          )} />
          <Route path='/register' render={() => (
            isAuthenticated
            ? <Redirect to='/' />
            : <RegisterForm
              createFlashMessage={this.createFlashMessage}
              registerUser={this.registerUser} />
          )} />
          <Route path='/login' render={() => (
            isAuthenticated
            ? <Redirect to='/' />
            : <LoginForm
              createFlashMessage={this.createFlashMessage}
              loginUser={this.loginUser} />
          )} />
          <Route path='/equipment' render={() => (
            <EquipmentList
              equipments={this.state.equipments}
              isAuthenticated={isAuthenticated}
              getCurrentUser={this.getCurrentUser}
            />
          )} />
          <Route path='/equipment/create' render={() => (
             <EquipmentForm
              createFlashMessage={this.createFlashMessage}
              saved={this.state.saved} />
            
          )} />
          <Route path='/destinations/' render={() => (
            <DestinationList
              createFlashMessage={this.createFlashMessage}
              saved={this.state.saved} />
          )} />
          <Route path='/destinations/create' render={() => (
            isAuthenticated
            ? <DestinationForm
              createFlashMessage={this.createFlashMessage}
              saved={this.state.saved} />
            : <Redirect to={{ pathname: '/login' }} />
          )} />
          <Route path='/trips/create' render={() => (
            isAuthenticated
            ? <TripForm
              createFlashMessage={this.createFlashMessage}
              saved={this.state.saved} />
            : <Redirect to={{ pathname: '/login' }} />
          )} />
          <Route path='/collection' render={() => (
            isAuthenticated
            ? <SavedTrips
              createFlashMessage={this.createFlashMessage}
              saved={this.state.saved} />
            : <Redirect to={{ pathname: '/login' }} />
          )} />
          <Route path='/trips' render={() => (
            <SavedTrips
              createFlashMessage={this.createFlashMessage}
              saved={this.state.saved} />
          )} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default App
