import React, { useState } from 'react';
import style from './HomeCont.module.scss';
import Badge from '@sudo-boss/spellbook/Badge';
import Button from '@sudo-boss/spellbook/Button';

/**
 * HomeCont Component: Description of the behavior...
 * @returns {JSX.Element}
 */
export function HomeCont() {
  // -----------------------CONSTS, HOOKS, STATES
  const [count, setCount] = useState(0);
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div className={style.HomeCont}>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)} colorType="primary">
          count is {count}
        </Button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <Badge color="active" shape="pill" size="medium">
        Pending
      </Badge>
    </div>
  );
}
