import * as React from 'react';
import { render } from 'react-dom';
import App from './init';

const startApp = () => {
  const virtualDom = App();

  render(
    virtualDom,
    document.getElementById('root'),
  );
};

startApp();
