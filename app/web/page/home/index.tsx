import React, { Component } from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { BrowserRouter } from "react-router-dom";

import Router from "./router";
import "@css/global.css";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

function bootstrap() {
  if (EASY_ENV_IS_NODE) {
    return App;
  }
  const state = window.__INITIAL_STATE__;
  const root = document.getElementById("app");

  if (EASY_ENV_IS_DEV) {
    ReactDOM.render(
      <AppContainer>
        <App {...state} />
      </AppContainer>,
      root
    );
  } else {
    ReactDOM.render(<App {...state} />, root);
  }
}
if (module.hot) {
  module.hot.accept();
}

export default bootstrap();
