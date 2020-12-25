import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Navigator from './Navigator';

ReactDOM.render(
  <React.StrictMode>
    <Navigator />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


