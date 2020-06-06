import { CHANGE_NAME_FILTER, CHANGE_TAG_FILTER } from '../actions';

const filter = (state = {name: '', tag: 'All'}, action) => {
  switch (action.type) {
    case CHANGE_NAME_FILTER:
      return {...state, name: action.filter };

    case CHANGE_TAG_FILTER:
      return {...state, tag: action.filter };

    default:
      return state;
  }
};

export default filter;
