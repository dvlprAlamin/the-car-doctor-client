import { CssBaseline } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { ContextProvider } from './context';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <CssBaseline />
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
