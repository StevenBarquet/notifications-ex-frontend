import React from 'react';
import { Route, Routes as RoutesHolder } from 'react-router-dom';
import { Home } from 'src/pages/Home/Home';
import { TableEx } from 'src/pages/TableEx/TableEx';
import { TableGridEx } from 'src/pages/TableGridEx/TableGridEx';

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
      <Route path="/table-grid" element={<TableGridEx />} />
    </RoutesHolder>
  );
}
