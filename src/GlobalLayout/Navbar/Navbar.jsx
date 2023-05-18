// ---Dependencies
import { Grid, GridArea } from '@sudo-boss/spellbook/Grid';
import React from 'react';
import style from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import NavBar from '@sudo-boss/spellbook/NavBar';
import { Brand } from '@sudo-boss/spellbook/NavBar';

/**
 * Navbar Component:  Descripción del comportamiento...
 * @returns {JSX.Element}
 */
export function Navbar() {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <NavBar className={style.Navbar}>
      <Grid density="detailed">
        <GridArea small={2}>
          <Brand />
        </GridArea>
        <GridArea slim={2} small={10}>
          <Grid density="simple">
            <GridArea small={4}>
              <Link to="/">Home</Link>
            </GridArea>
            <GridArea small={4}>
              <Link to="/table">Table Example</Link>
            </GridArea>
            <GridArea small={4}>
              <Link to="/table-grid">TableGrid Example</Link>
            </GridArea>
          </Grid>
        </GridArea>
      </Grid>
    </NavBar>
  );
}
