import { FETCH_CHAMPIONS_SUCCESS, FETCH_CHAMPIONS_ERROR, FETCH_CHAMPIONS } from '../actions';

const champions = (state = { data: [] }, action) => {
  switch (action.type) {
    case FETCH_CHAMPIONS_SUCCESS:
      return {
        ...state,
        status: 'success',
        data: action.champions,
      };

    case FETCH_CHAMPIONS_ERROR:
      return {
        ...state,
        status: 'error',
      };

    case FETCH_CHAMPIONS:
      return {
        ...state,
        status: 'fetching',
      };

    default:
      return state;
  }
};

export default champions;
