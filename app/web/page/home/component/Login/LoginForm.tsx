import React from "react";
import { Form, Icon, Input, Button } from "antd";
import { withRouter } from "react-router-dom";
import { createMemoryHistory } from "history";
import "./Login.less";
const FormItem = Form.Item;

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonUnVisible: false,
      buttonLoading: false
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    createMemoryHistory.push("/project");
  };

  componentDidMount = () => {};

  render() {
    //const { username, password } = this.props.item;
    //@ts-ignore
    const { getFieldDecorator } = this.props.form;

    const UserIcon = <Icon type="user" />;
    const LockIcon = <Icon type="lock" />;

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "请输入域账号" }]
          })(
            <Input
              placeholder="用户名"
              size="large"
              name="username"
              addonBefore={UserIcon}
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "请输入密码" }]
          })(
            <Input
              type="password"
              placeholder="密码"
              size="large"
              name="password"
              addonBefore={LockIcon}
            />
          )}
        </FormItem>
        <FormItem>
          {/* <Button type="primary" htmlType="submit" size="large" icon="login" styleName="submit" disabled={ buttonUnVisible } loading={ buttonLoading }>登 录</Button> */}
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            icon="login"
            onClick={() => {
              //@ts-ignore
              this.props.history.push("/project/table");
            }}
          >
            登录
          </Button>
        </FormItem>
      </Form>
    );
  }

  componentWillUnmount = () => {
    this.setState = () => {
      return;
    };
  };
}

const LoginFormWarf = Form.create()(LoginForm);

export default withRouter(LoginFormWarf);
