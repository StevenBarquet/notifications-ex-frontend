import '@sudo-boss/spellbook/spellbook.css';
import '@sudo-boss/spellbook/spellbook-reset.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'src/styles/_index.scss';
import '@sudo-boss/spellbook/sb-theme-magenta.css';
import { App } from './_App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
