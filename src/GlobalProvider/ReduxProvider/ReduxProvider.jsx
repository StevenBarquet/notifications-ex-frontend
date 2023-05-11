import { Provider } from 'react-redux';
import React from 'react';
import { reduxStorage } from 'src/redux/createStorage';

/**
 * ReduxProvider Component: Description of the behavior...
 * @param {{children: React.ReactNode}} props - Component parameters such as: ...
 * @returns {JSX.Element}
 */
export function ReduxProvider({ children }) {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return <Provider store={reduxStorage}>{children}</Provider>;
}
