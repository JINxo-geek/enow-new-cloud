import React, { Component, ReactElement } from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import Layout from "../../framework/layout";
import { TabProps } from "../../framework/type";
import Router from "./router";
import { BrowserRouter } from "react-router-dom";
import "../../asset/css/global.css";
class App extends Component<TabProps, any> {
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
  if (module.hot) {
    console.log("启动热重载");
    module.hot.accept();
  }
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
  ReactDOM.hydrate(<App {...state} />, root);
}

export default bootstrap();
