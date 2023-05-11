import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

const queryClient = new QueryClient();

/**
 * QueryProvider Component: Description of the behavior...
 * @param {{children: React.ReactNode}} props - Component parameters such as: ...
 * @returns {JSX.Element}
 */
export function QueryProvider({ children }) {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
