import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './store/store.js';
import App from './App.jsx';

import "./style.scss";

export default () => {
  const store = createStore(reducers, applyMiddleware(thunk));

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
