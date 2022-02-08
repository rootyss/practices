import * as React from 'react';
import { render } from 'react-dom';
import App from './init';

const startApp = () => {

  render(
    <App />,
    document.getElementById('root'),
  );
};

startApp();
