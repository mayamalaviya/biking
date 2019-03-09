import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App.jsx';

import { createStore } from 'redux';

import tripReducer from './reducers/tripReducer';
import destinationReducer from './reducers/destinationReducer';
import equipmentReducer from './reducers/equipmentReducer';

const store = createStore(destinationReducer, equipmentReducer, tripReducer);

const router = (
  <Router>
    <Route component={App} />
  </Router>
)

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  router,
  document.getElementById('root')
)
