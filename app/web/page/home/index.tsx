import React, { Component } from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { BrowserRouter } from "react-router-dom";

import Layout from "../../framework/layout";
import Router from "./router";
import fetch from "@helpers/callAPI";
import "../../asset/css/global.css";

fetch('GET_USER_LEVEL', {}).then(res => {
  console.log('GET_USER_LEVEL', res);
});

class App extends Component<any, any> {
  render() {
    return (
      <Layout {...this.props}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Layout>
    );
  }
}

function bootstrap() {
  if (EASY_ENV_IS_NODE) {
    return App;
  }
  const state = window.__INITIAL_STATE__;
  const root = document.getElementById("app");
  if (EASY_ENV_IS_DEV) {
    ReactDOM.hydrate(
      <AppContainer>
        <App {...state} />
      </AppContainer>,
      root
    );
  }
  if (module.hot) {
    console.log("ENOW...");
    module.hot.accept();
  }
  ReactDOM.hydrate(<App {...state} />, root);
}

export default bootstrap();
