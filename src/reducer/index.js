import { combineReducers } from 'redux';
import brandReducer from './brandReducer';

export default combineReducers({
  brands: brandReducer
});
