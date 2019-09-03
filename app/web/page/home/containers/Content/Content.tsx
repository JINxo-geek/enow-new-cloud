import React, { Component } from 'react';
import './Content.less';
import { Route, Switch } from 'react-router-dom';
import ContainersMyContent from './MyContent/MyContent';
import ContainersTimeCapule from './TimeCapsule/TimeCapsule';
import ContainersRecycleBin from './RecycleBin/RecycleBin';
import BreadcrumbItems from '../../sections/BreadcrumbItems';
import { connect } from 'react-redux';
import { getCoursewareGroup } from '../../../../store/actions/get.courseware';
import { getSubFile } from '../../../../store/actions/get.subFile';
import { getShare } from '../../../../store/actions/post.share';
import { getBread } from '../../../../store/actions/get.bread';
import {refresh} from '../../../../store/actions/refresh';

const mapStateToProps = store => {
  return { ...store };
};
const mapDispatchToProps = (dispatch: any) => ({
  getCoursewareGroup: values => {
    dispatch(getCoursewareGroup(values));
  },
  getSubFile: values => {
    dispatch(getSubFile(values));
  },
  getShareLink: values => {
    dispatch(getShare(values));
  },
  getBread: values => {
    dispatch(getBread(values));
  },
  refresh: values => {
    dispatch(refresh(values));
  },
});
interface ContainersContentProps {
  getCourseware?: object;
  getCoursewareGroup?: any;
  getSubFile?: any;
  getShareLink?: any;
  postShare?: object;
  getBread?: any;
  breadcrumbs?: any;
  refresh?: any;
}
class ContainersContent extends Component<ContainersContentProps> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <BreadcrumbItems
          refresh={this.props.refresh}
          breadArray={this.props.breadcrumbs.breadArray}
          getBread={this.props.getBread}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <ContainersMyContent
                getCourseware={this.props.getCourseware}
                postShare={this.props.postShare}
                getCoursewareGroup={this.props.getCoursewareGroup}
                getSubFile={this.props.getSubFile}
                getShareLink={this.props.getShareLink}
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
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainersContent);
