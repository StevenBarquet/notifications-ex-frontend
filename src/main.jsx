import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'src/pages/App';
import 'src/styles/index.css';
import '@sudo-boss/spellbook/spellbook.css';
import '@sudo-boss/spellbook/spellbook-reset.css';
import '@sudo-boss/spellbook/sb-theme-orange.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
