import React from 'react';
import { Home } from 'src/pages/Home/Home';
import { TableEx } from 'src/pages/TableEx/TableEx';
import { Route, Routes as RoutesHolder } from 'react-router-dom';

/**
 * Routes Component: First level routes
 * @returns {JSX.Element}
 */
export function Routes() {
  // -----------------------RENDER
  return (
    <RoutesHolder>
      <Route path="/" element={<Home />} />
      <Route path="/table" element={<TableEx />} />
    </RoutesHolder>
  );
}
