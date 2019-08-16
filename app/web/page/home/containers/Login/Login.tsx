import React, { Component } from "react";
import LoginForm from "../../sections/LoginForm";
import "./Login.less";
class ContainersLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="view">
        <div className="center">
          <h1>Cloud</h1>
          <LoginForm />
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

export default ContainersLogin;
