import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './store/store.js';
import App from './App.jsx';
import { fetchTodosMiddleware } from './store/middlewares.js';

import "./style.scss";

export default () => {
  const store = createStore(reducers, applyMiddleware(fetchTodosMiddleware));

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
