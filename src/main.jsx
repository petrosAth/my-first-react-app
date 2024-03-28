import React from 'react';
import ReactDOM from 'react-dom/client';
import Greeting from './Greeting.jsx';
import { List } from './List.jsx';
import { App } from './ComponentList.jsx';
import './stylesheets/normalizze.css';
import './stylesheets/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Greeting />
    <List />
    <App.Animals />
    <App.Todos />
  </React.StrictMode>,
);
