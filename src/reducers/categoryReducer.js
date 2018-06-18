import { LOCATION_CHANGE } from 'react-router-redux';

import { 
  RECEIVE_CATEGORY, 
  RECEIVE_DETAILS,
  RECEIVE_LINKED_DETAILS,
  RESET_DETAILS,
} from '../actions/categoryActions';

const initialState = {
  categories: {},
  details: {}
};

const reducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch(type) {
    
    case LOCATION_CHANGE:
    return {
      ...state,
      details: {}
    };
    
    case RECEIVE_CATEGORY:
      return {
        ...state,
        categories: {
          ...state.categories,
          [payload.category]: payload.data
        }
      };
    case RECEIVE_LINKED_DETAILS: 
      return {
        ...state,
        details: {
          ...state.details,
          [payload.link]: payload.data
        }
      };
    case RECEIVE_DETAILS: 
      return {
        ...state,
        details: payload
      };
    case RESET_DETAILS:
      return {
        ...state,
        details: {}
      };
    default:
      return state;
  }
};

export default reducer;