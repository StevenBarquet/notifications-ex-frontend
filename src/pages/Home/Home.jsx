import React from 'react';
import { Helmet } from 'react-helmet';
import { HomeCont } from './HomeCont/HomeCont';

/**
 * Home Component: Description of the behavior...
 * @returns {JSX.Element}
 */
export function Home() {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <>
      <Helmet>
        <title>Home Page - Spellbook Playground</title>
      </Helmet>
      <HomeCont />
    </>
  );
}
