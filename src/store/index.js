import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { ACTION_TYPES } from "./actions";

const componentEnhancer =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];
const initialState = {
  listCocktail: [],
  listType: null,
  error: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.SAVE_LIST_COCKTAIL: {
      const { payload } = action;
    
      return {
        ...state,
        error: null,
        listCocktail: [...state.listCocktail, payload]
      };
    }

    case ACTION_TYPES.SAVE_LOADED_LIST_TYPE: {
      const { payload } = action;
      const listType = payload.map( type => ({
        title: type.strCategory,
        sort: true,
      }));

      return {
        ...state,
        error: null,
        listType: listType
      };
    }

    case ACTION_TYPES.SAVE_LIST_TYPE: {
      const { payload } = action;

      return {
        ...state,
        error: null,
        listType: payload
      };
    }

    case ACTION_TYPES.SET_LOAD_ERROR: {
      const { payload } = action;

      return {
        ...state,
        error: payload
      };
    }

    default:
      return state;
  }
}

export const store = createStore(
  reducer,
  componentEnhancer(applyMiddleware(...middleware))
);
