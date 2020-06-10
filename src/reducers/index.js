import { combineReducers } from 'redux';
import champions from './champions';
import filter from './filter';

const rootReducer = combineReducers({ champions, filter });

export default rootReducer;
