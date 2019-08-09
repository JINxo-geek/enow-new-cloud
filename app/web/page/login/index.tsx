import React, { Component, ReactElement } from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import Layout from "../../framework/layout";
// https://github.com/gaearon/react-hot-loader/issues/525
import Login from "./Login";
import { TabProps } from "../../framework/type";
import { hashHistory } from "react-router";
import { ServerRouter } from "react-router-dom";
import { BrowserRouter, StaticRouter } from "react-router-dom";
class App extends Component<TabProps, any> {
  render() {
    return (
      <Layout {...this.props}>
        <BrowserRouter>
          <Login />
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
    if (module.hot) {
      module.hot.accept();
    }
  }
  ReactDOM.hydrate(<App {...state} />, root);
}

export default bootstrap();
