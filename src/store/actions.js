const API_URL_LIST_COCKTAIL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php';
const API_URL_LIST = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';


export const ACTION_TYPES = {
  SAVE_LIST_COCKTAIL: 'SAVE_LIST_COCKTAIL',
  SAVE_LOADED_LIST_TYPE: 'SAVE_LOADED_LIST_TYPE',
  SAVE_LIST_TYPE: 'SAVE_LIST_TYPE',
  SET_LOAD_ERROR: 'SET_LOAD_ERROR',
};

const saveListCocktail = data => ({
  type: ACTION_TYPES.SAVE_LIST_COCKTAIL,
  payload: data,
});

const setError = error => ({
  type: ACTION_TYPES.SET_LOAD_ERROR,
  payload: error,
});

const saveLoadedListType = data => ({
  type: ACTION_TYPES.SAVE_LOADED_LIST_TYPE,
  payload: data,
});

export const saveListType = data => ({
  type: ACTION_TYPES.SAVE_LIST_TYPE,
  payload: data,
});

export const loadDataListType = () => dispatch => {
  fetch(API_URL_LIST, {
    method: 'GET'
  })
    .then(res => res.json())
    .then(({drinks}) => dispatch(saveLoadedListType(drinks)))
    .catch(error => dispatch(setError(error.message)))
};

export const loadDataListCocktail = param => dispatch => {
  fetch(`${API_URL_LIST_COCKTAIL}?c=${param}`, {
    method: 'GET'
  })
    .then(res => res.json())
    .then(({ drinks }) => dispatch(saveListCocktail({type: param, drinks})))
    .catch(error => dispatch(setError(error.message)))
};

