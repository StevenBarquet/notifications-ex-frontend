import React from 'react';
import { Helmet } from 'react-helmet';
import { TableGridExCont } from './TableGridExCont/TableGridExCont';
/**
 * TableGridEx Component: Description of the behavior...
 * @param {Props} props - Component parameters such as: ...
 * @returns {JSX.Element}
 */
export function TableGridEx() {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <>
      <Helmet>
        <title>Table Grid use example - Spellbook Playground</title>
      </Helmet>
      <TableGridExCont />
    </>
  );
}
