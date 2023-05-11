import { CASES } from './constants';

// -------------------------------------------STATE------------------------------------
const INITIAL_STATE = {
  isLoading: false,
};

// ------------------------------------------REDUCER-----------------------------------
export const appStateReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CASES.SET_STATE:
      return payload;

    case CASES.UPDATE_STATE:
      return {
        ...state,
        ...payload,
      };

    case CASES.CLEAR_STATE:
      return INITIAL_STATE;

    default:
      return state;
  }
};
