import {
  SEARCH_BREWERIES,
  AUTO_COMPLETE,
  SET_LOADING,
  CLEAR_BREWERIES,
  GET_BREWERY,
  CLEAR_SUGGESTIONS
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_BREWERIES:
      return {
        ...state,
        breweries: action.payload,
        loading: false
      };
    case AUTO_COMPLETE:
      return {
        ...state,
        suggestions: action.payload
      };
    case CLEAR_SUGGESTIONS:
      return {
        ...state,
        suggestions: []
      };
    case GET_BREWERY:
      return {
        ...state,
        brewery: action.payload,
        loading: false
      };
    case CLEAR_BREWERIES:
      return {
        ...state,
        breweries: [],
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
