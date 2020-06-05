export const ADD_CHAMPION = 'ADD_CHAMPION';
export const CHANGE_NAME_FILTER = 'CHANGE_NAME_FILTER';

export const addChampion = champion => (
  {
    type: ADD_CHAMPION,
    champion,
  }
);

export const changeNameFilter = filter => (
  {
    type: CHANGE_NAME_FILTER,
    filter,
  }
);
