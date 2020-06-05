import { CHANGE_NAME_FILTER } from "../actions";

const nameFilter = (state = '', action) => {
  switch(action.type) {
    case CHANGE_NAME_FILTER:
      return action.filter;

    default:
      return state;
  }
}

export default nameFilter;