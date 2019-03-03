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

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      trips: [],
      saved: [],
      flashMessages: [],
      isAuthenticated: false
    }
    this.searchTrip('land before time')
    this.registerUser = this.registerUser.bind(this)
    this.loginUser = this.loginUser.bind(this)
    this.logoutUser = this.logoutUser.bind(this)
    this.deleteFlashMessage = this.deleteFlashMessage.bind(this)
    this.createFlashMessage = this.createFlashMessage.bind(this)
    this.saveTrip = this.saveTrip.bind(this)
    this.getTrips = this.getTrips.bind(this)
  }
  searchTrip(term) {
    const options = {
        url: 'http://localhost:3001/trips/user',
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
      url: 'http://localhost:3001/trips/user',
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
    /*
      why? http://localhost:3000/users/register
      why not? http://users-service:3000/users/register
     */
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
    /*
      why? http://localhost:3000/users/login
      why not? http://users-service:3000/users/login
     */
    return axios.post('http://localhost:3000/users/login', userData)
    .then((res) => {
      window.localStorage.setItem('authToken', res.data.token)
      window.localStorage.setItem('user', res.data.user)
      this.setState({ isAuthenticated: true })
      this.createFlashMessage('You successfully logged in! Welcome!')
      this.props.history.push('/')
      this.getTrips()
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
  saveTrip (trip) {
    const options = {
      url: 'http://localhost:3001/trips',
      method: 'post',
      data: {
        title: trip
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
  getTrips() {
    const options = {
      url: 'http://localhost:3001/trips/user',
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
                <SearchBar searchTrip={this.searchTrip.bind(this)} />
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
          <Route path='/collection' render={() => (
            isAuthenticated
            ? <SavedTrips
              createFlashMessage={this.createFlashMessage}
              saved={this.state.saved} />
            : <Redirect to={{ pathname: '/login' }} />
          )} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default App
