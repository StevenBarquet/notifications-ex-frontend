// --- Dependencies
import React from 'react';
// --- Components
import { NavFooter } from './NavFooter/NavFooter';
import { Navbar } from './Navbar/Navbar';

/**
 * GlobalLayout Component: Component that is represented globally in the application and
 * persists across all pages. You can add new global layout components here to render them
 * globally. Example: Toolbars, Footers, Chat components, Carts, etc.
 * @param {{children: React.ReactNode}} props - Props of the component
 * @return {JSX.Element} GlobalLayout component
 */
export function GlobalLayout({ children }) {
  // ----------------------- CONSTS, HOOKS, STATES
  //const classNames = useLayoutStyles();
  // ----------------------- RENDER
  return (
    <div >
      <header>
        <Navbar />
      </header>
      <main>
        {children}
        {/* <LoadingFullScreen /> */}
      </main>
      <footer>
        <NavFooter />
      </footer>
    </div>
  );
}
