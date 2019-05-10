import { combineReducers } from 'redux';

import { authentication } from './auth.reducer';
import { destination } from './destination.reducer';
import { equipment } from './equipment.reducer';
import { trip } from './trip.reducer';


const rootReducer = combineReducers({
  authentication,
  destination,
  equipment,
  trip
});

export default rootReducer;