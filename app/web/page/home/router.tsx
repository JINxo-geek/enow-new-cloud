import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./component/Login";
import Tab from "./component/tab";
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/project/" component={Tab} />
      </Switch>
    );
  }
}
