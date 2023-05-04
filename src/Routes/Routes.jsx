import React from 'react';
import { Router } from '@reach/router';
import { Home } from 'src/pages/Home/Home';

/**
 * Routes Component: First level routes
 * @returns {JSX.Element}
 */
export function Routes() {
  // -----------------------RENDER
  return (
    <Router>
      <Home path="/" />
    </Router>
  );
}
