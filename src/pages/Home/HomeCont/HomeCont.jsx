import style from './HomeCont.module.scss';
import React, { useState } from 'react';
import reactLogo from 'src/assets/react.svg';
import viteLogo from '/vite.svg';
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
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
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
    </div>
  );
}
