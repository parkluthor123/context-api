import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import CountProvider from './contexts/count'

ReactDOM.render(
  <CountProvider>
    <App />
  </CountProvider>,
  document.getElementById('root')
);
