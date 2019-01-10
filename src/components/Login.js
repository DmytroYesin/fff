import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import { formItemLayout } from "../common/common_styles";
import { loginUserRequest } from "../redux/actions/login_user.actions";

const FormItem = Form.Item,
      mapStateToProps = state => {
        const { loading, hasLogin } = state.login;
        return { loading, hasLogin };
      };

export default Form.create()(connect(mapStateToProps, null)(class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = (name, value) => this.setState({ [name]: value });
  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.dispatch(loginUserRequest(email, password));
  };

  render() {
    return (
      <div className='container'>
        <Form onSubmit={this.handleSubmit}>
          <h2 className='login_title'>Login Form</h2>
          <FormItem {...formItemLayout}>
            <Input
              onChange={e => this.handleChange('email', e.target.value)}
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email" />
          </FormItem>
          <FormItem {...formItemLayout}>
            <Input
              onChange={e => this.handleChange('password', e.target.value)}
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password" />
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <Link to='/registration'>register now!</Link>
          </FormItem>
        </Form>
      </div>
    );
  }
}));