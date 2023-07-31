// rootReducer.js
import { combineReducers } from 'redux';
import cartReducer from './cartReducer';

const allReducer = combineReducers({
  cart: cartReducer,
});

export default allReducer;