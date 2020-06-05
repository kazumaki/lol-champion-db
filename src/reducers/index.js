import { combineReducers } from 'redux';

const reducinho = (state = 1, action) => state;

const rootReducer = combineReducers({reducinho});

export default rootReducer;