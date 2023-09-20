import React from 'react';
import { Helmet } from 'react-helmet';
import { RefetchExCont } from './RefetchExCont/RefetchExCont';
/**
 * RefetchEx Component: Description of the behavior...
 * @param {Props} props - Component parameters such as: ...
 * @returns {JSX.Element}
 */
export function RefetchEx() {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <>
      <Helmet>
        <title>Refetch use example - Spellbook Playground</title>
      </Helmet>
      <RefetchExCont />
    </>
  );
}
