import { combineReducers } from 'redux';
import champions from './champions';
import nameFilter from './nameFilter';

const rootReducer = combineReducers({ champions, nameFilter });

export default rootReducer;
