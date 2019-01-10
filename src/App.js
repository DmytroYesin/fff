import React, { Component, Fragment } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './common/private_route';
import { history } from "./common/history";
import Registration from './components/Registration';
import Login from './components/Login';
import Home from './components/Home';
import Nav from './components/Nav';
import 'antd/dist/antd.css';

export default class App extends Component {
  render() {
    return (
        <Router history={history}>
          <Fragment>
            <Nav />
              <Switch>
                <PrivateRoute exact path='/' component={Home} />
                <Route path='/registration' component={Registration} />
                <Route path='/login' component={Login} />
              </Switch>

          </Fragment>
        </Router>
    );
  }
}