import React, { Component } from "react";
import "./Content.less";
import { Route, Switch } from "react-router-dom";
import ContainersMyContent from "./MyContent/MyContent";
import ContainersTimeCapule from "./TimeCapsule/TimeCapsule";
import ContainersRecycleBin from "./RecycleBin/RecycleBin";
import { connect } from "react-redux";
import { getCoursewareGroup } from "../../../../store/actions";

const mapStateToProps = store => {
  return { ...store };
};
const mapDispatchToProps = (dispatch: any) => ({
  getCoursewareGroup: values => {
    dispatch(getCoursewareGroup(values));
  }
});
interface ContainersContentProps {
  getCourseware?: object;
}
class ContainersContent extends Component<ContainersContentProps> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("ContainersContentProps", this.props);
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <ContainersMyContent
                getCourseware={this.props.getCourseware}
                {...props}
              />
            )}
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
