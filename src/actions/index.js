export const CHANGE_NAME_FILTER = 'CHANGE_NAME_FILTER';
export const FETCH_CHAMPIONS = 'FETCH_CHAMPIONS';
export const FETCH_CHAMPIONS_SUCCESS = 'FETCH_CHAMPIONS_SUCCESS';
export const FETCH_CHAMPIONS_ERROR = 'FETCH_CHAMPIONS_ERROR';
export const apiChampions = 'http://ddragon.leagueoflegends.com/cdn/10.11.1/data/en_US/champion.json';

export const changeNameFilter = filter => (
  {
    type: CHANGE_NAME_FILTER,
    filter,
  }
);

export const fetchChampions = () => (
  {
    type: FETCH_CHAMPIONS,
  }
);

export const fetchChampionsSuccess = data => {
  const keys = Object.keys(data.data);
  const champions = [];

  keys.forEach(key => champions.push(data.data[key]));

  return {
    type: FETCH_CHAMPIONS_SUCCESS,
    champions,
  };
};

export const fetchChampionsError = error => (
  {
    type: fetchChampionsError,
    error,
  }
);

export const requestChampions = dispatch => {
  dispatch(fetchChampions());
  fetch(apiChampions)
    .then(result => result.json())
    .then(data => {
      dispatch(fetchChampionsSuccess(data));
    })
    .catch(error => fetchChampionsError(error));
};
