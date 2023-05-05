import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

/**
 * GlobalProvider Component: Providers for the app
 * @param {{children: React.ReactNode}} props - Component parameters such as: ...
 * @returns {JSX.Element}
 */
export function GlobalProvider({ children }) {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return <Router>{children}</Router>;
}
