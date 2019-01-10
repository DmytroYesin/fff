import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { formItemLayout, tailFormItemLayout } from "../common/common_styles";
import { registerUserRequest } from "../redux/actions/register_user.actions";
import {Link} from "react-router-dom";

const FormItem = Form.Item,
      mapStateToProps = state => {
          const { loading, hasRegistered } = state.registration;
          return { loading, hasRegistered };
      };

export default Form.create()(connect(mapStateToProps, null)(class Registration extends Component {
  state = {
    username: '',
    email: '',
    password: ''
  };

  handleChange = (name, value) => this.setState({ [name]: value });
  handleSubmit = e => {
    e.preventDefault();
    const { username, email, password } = this.state;
    this.props.dispatch(registerUserRequest(username, email, password));
  };

  render() {
    return (
      <div className='container'>
        <Form onSubmit={this.handleSubmit}>
          <h2 className='register_title'>Registration Form</h2>
          <FormItem {...formItemLayout} label="Username">
            <Input onChange={e => this.handleChange('username', e.target.value)} />
          </FormItem>
          <FormItem {...formItemLayout} label="E-mail">
            <Input onChange={e => this.handleChange('email', e.target.value)} />
          </FormItem>
          <FormItem {...formItemLayout} label="Password">
            <Input type="password" onChange={e => this.handleChange('password', e.target.value)} />
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" className='login-form-button'>Register</Button>
            Or <Link to='/login'>Login</Link>
          </FormItem>
        </Form>
      </div>
    );
  }
}));