import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUserRequest } from "../redux/actions/logout_user.actions";
import { Layout, Menu } from 'antd';

const { Header } = Layout, mapStateToProps = state => {
  const { hasLogin } = state.login;
  return { hasLogin };
};

export default connect(mapStateToProps, null)(class Nav extends Component {
  logout = () => this.props.dispatch(logoutUserRequest());

  render() {
    const { hasLogin } = this.props;
    return (
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}>
            <Menu.Item key="3" style={{ float: 'right' }}
                       onClick={this.logout}>{hasLogin ? 'Logout' : ''}</Menu.Item>
          </Menu>
        </Header>
      </Layout>
    )
  }});