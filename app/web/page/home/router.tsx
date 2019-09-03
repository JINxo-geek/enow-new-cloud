import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ScreensLogin from './screens/Login/Login';
import ScreensLayout from './screens/Layout/Layout';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={ScreensLayout} />
        {/* <Route path="/login" component={ScreensLogin} /> */}
        <Route path="/project" component={ScreensLayout} />
      </Switch>
    );
  }
}
