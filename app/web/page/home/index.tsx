import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';

import Router from './router';
import '@css/global.css';

class App extends Component<any, any> {
  render() {
    return (
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    );
  }
}

function bootstrap() {
  if (EASY_ENV_IS_NODE) {
    return App;
  }
  const state = window.__INITIAL_STATE__;
  const root = document.getElementById('app');
  if (EASY_ENV_IS_DEV) {
    ReactDOM.render(
      <AppContainer>
        <App {...state} />
      </AppContainer>,
      root
    );
  }
  if (module.hot) {
    module.hot.accept();
  }
  ReactDOM.render(<App {...state} />, root);
}

export default bootstrap();
