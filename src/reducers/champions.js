import { ADD_CHAMPION } from '../actions/champions';

const champions = (state = [], action) => {
  switch(action.type) {
    case ADD_CHAMPION:
      return [...state, action.champion];

    default:
      return state;
  }
}

export default champions;