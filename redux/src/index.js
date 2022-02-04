import ReactDOM from 'react-dom';
import app from './init.jsx';

const startApp = () => {
  const virtualDom = app();

  ReactDOM.render(
    virtualDom,
    document.getElementById('root'),
  );
};

startApp();