import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { TimerProvider } from './context/timerContext';

ReactDOM.render(
  <React.StrictMode>
    <TimerProvider>
    <App />
    </TimerProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
