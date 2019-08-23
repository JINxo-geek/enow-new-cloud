import React, { Component } from "react";
import "./Content.less";
import { Route, Switch } from "react-router-dom";
import ContainersMyContent from "./MyContent/MyContent";
import ContainersTimeCapule from "./TimeCapsule/TimeCapsule";
import ContainersRecycleBin from "./RecycleBin/RecycleBin";
import { connect } from "react-redux";
import { getCourseware } from "../../../../store/actions";

const mapStateToProps = store => {
  return { ...store };
};
const mapDispatchToProps = (dispatch: any) => ({
  getCourseware: values => {
    dispatch(getCourseware(values));
  }
});

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
            exact
            path="/"
            render={props => <ContainersMyContent {...this.props} {...props} />}
          />
          <Route
            path="/project/mycontent"
            render={props => <ContainersMyContent {...this.props} {...props} />}
          />
          <Route
            path="/project/timecapsule"
            render={props => <ContainersTimeCapule {...props} />}
          />
          <Route
            path="/project/recyclebin"
            render={props => <ContainersRecycleBin {...props} />}
          />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainersContent);
