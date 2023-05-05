// ---Dependencies
import { Grid, GridArea } from '@sudo-boss/spellbook/Grid';
import React from 'react';
import style from './Navbar.module.scss';
import { Link } from 'react-router-dom';

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
    <nav className={style.Navbar}>
      <Grid density="detailed">
        <GridArea small={2}>
          <img
            src="https://dtci-spellbook.s3-us-west-2.amazonaws.com/img/logos/spellbook-bright.svg"
            className="logo"
            alt="spellbook lib logo"
          />
        </GridArea>
        <GridArea slim={2} small={10}>
          <Grid density="simple">
            <GridArea small={6}>
              <Link to="/">Home</Link>
            </GridArea>
            <GridArea small={6}>
              <Link to="/table">Table Example</Link>
            </GridArea>
          </Grid>
        </GridArea>
      </Grid>
    </nav>
  );
}
