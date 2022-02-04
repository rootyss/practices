import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './store/store.js';
import App from './App.jsx';

import "./style.scss";

export default () => {
  const store = createStore(reducers);

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
