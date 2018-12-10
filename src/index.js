import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import TodoList from './components/TodoList.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(< TodoList />, document.getElementById('root'));

serviceWorker.unregister();
