import {
  FETCH_CHAMPIONS_SUCCESS, FETCH_CHAMPIONS_ERROR, FETCH_CHAMPIONS, CHANGE_SELECTED_CHAMPION,
} from '../actions';

const champions = (state = { data: [], selectedChampion: {} }, action) => {
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

    case CHANGE_SELECTED_CHAMPION:
      return {
        ...state,
        selectedChampion: action.selectedChampion,
      };

    default:
      return state;
  }
};

export default champions;
