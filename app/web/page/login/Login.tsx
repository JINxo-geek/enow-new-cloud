import React, { Component } from "react";
import "./Login.less";
import { Route, Link, Switch } from "react-router-dom";
// import LoginForm from "./LoginForm";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("构造");
  }

  render() {
    return (
      <div className="view">
        <div className="center">
          <h1>xxx</h1>
          <Link to="ddds">Home</Link>
        </div>
      </div>
    );
  }

  componentWillUnmount = () => {
    this.setState = () => {
      return;
    };
  };
}

export default Login;
