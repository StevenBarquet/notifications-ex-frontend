import { Router } from '@reach/router';
import React from 'react';

/** Helper to get high order Router provider */
const Child = ({ child }) => <>{child}</>;

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
  return (
    <Router>
      <Child child={children} default />
    </Router>
  );
}
