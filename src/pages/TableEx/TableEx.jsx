import React from 'react';
import { Helmet } from 'react-helmet';
import { TableExCont } from './TableExCont/TableExCont';
/**
 * TableEx Component: Description of the behavior...
 * @param {Props} props - Component parameters such as: ...
 * @returns {JSX.Element}
 */
export function TableEx() {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <>
      <Helmet>
        <title>Table use example - Spellbook Playground</title>
      </Helmet>
      <TableExCont />
    </>
  );
}
