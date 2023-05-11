import { CASES } from './constants';

/**
 * @typedef IState
 * @prop {boolean} isLoading
 */

export const appStateActions = {
  /** @param {IState} payload */
  setState: (payload) => (dispatch) => {
    dispatch({
      type: CASES.SET_STATE,
      payload,
    });
  },
  /** @param {Partial<IState>} payload */
  updateState: (payload) => (dispatch) => {
    dispatch({
      type: CASES.UPDATE_STATE,
      payload,
    });
  },
  clearState: () => (dispatch) => {
    dispatch({
      type: CASES.CLEAR_STATE,
    });
  },
};
