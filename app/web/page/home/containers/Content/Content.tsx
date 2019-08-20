import React, { Component } from "react";
import "./Content.less";
import { Route, Switch } from "react-router-dom";
import ContainersMyContent from "./MyContent/MyContent";
import ContainersMyContent from "./MyContent/MyContent";
import ContainersMyContent from "./MyContent/MyContent";
class ContainersContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Switch>
          <Route
            path="/"
            render={props => <ContainersMyContent {...props} />}
          />
          <Route
            path="/project/table"
            render={props => <ContainersMyContent {...props} />}
          />
          <Route
            path="/project/table"
            render={props => <ContainersMyContent {...props} />}
          />
          {/* <Route path="/project/timecapsule" component={TimeCapsule} />
<Route path="/project/about" component={RecyleBin} /> */}
        </Switch>
      </div>
    );
  }

  componentWillUnmount = () => {
    this.setState = () => {
      return;
    };
  };
}

export default ContainersContent;
