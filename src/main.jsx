import React from 'react';
import ReactDOM from 'react-dom/client';
import Greeting from './Greeting.jsx';
import { List } from './List.jsx';
import { App } from './ComponentList.jsx';
import ColoredButtons from './ColoredButtons.jsx';
import Person from './Person.jsx';
import './stylesheets/normalize.css';
import './stylesheets/index.css';
import './stylesheets/buttons.css';

App.Button.defaultProps = {
  text: 'Click Me!',
  bgColor: 'white',
  fontSize: '25px',
};

const handleButtonClick = (url) => {
  window.location.href = url;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Greeting />
    <List />
    <App.Animals />
    <App.Todos />
    <App.Button text="Visit Google" bgColor="cyan" handleClick={handleButtonClick} />
    <ColoredButtons />
    <Person />
  </React.StrictMode>,
);
