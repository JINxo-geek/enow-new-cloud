import React, { Component } from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import "@css/global.css";
import configureStore from "../../store/configureStore";
import rootSaga from "../../store/sagas";
import { Provider } from "react-redux";

function App() {
  const store = configureStore(window.__INITIAL_STATE__);
  store.runSaga(rootSaga);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

function bootstrap() {
  if (EASY_ENV_IS_NODE) {
    return App;
  }

  const root = document.getElementById("app");

  if (EASY_ENV_IS_DEV) {
    ReactDOM.render(
      <AppContainer>
        <App />
      </AppContainer>,
      root
    );
  } else {
    ReactDOM.render(<App />, root);
  }
}
if (module.hot) {
  module.hot.accept();
}

export default bootstrap();
