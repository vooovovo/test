import { Route, Switch, Router } from 'react-router-dom';
import React, { Component } from 'react';
import history from './history';
import Login from './Component/Login';
import View from './Component/View';
import History from './Component/History'
import ForgotPass from './Component/ForgotPass'
import Sign_Up from './Component/Sign_Up'
import adra from './Component/adra'
import HomeAdmin from './Component/HomeAdmin'
import Edit from './Component/Edit'
import popfix from './Component/popfix'
import adken from './Component/adken'
import block from './Component/block'

import { Provider } from 'react-redux';
import configureStore from './Store';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <Provider store={configureStore}>
        <Router history={history}>
          <Switch>
            <Route exact path="/view" component={View} />
            <Route exact path="/signup" component={Sign_Up} />
            <Route exact path="/forgotpass" component={ForgotPass} />
            <Route exact path="/" component={block} />
            <Route exact path="/history" component={History} />
            <Route exact path="/edit" component={Edit} />
            <Route exact path="/homeAdmin" component={HomeAdmin} />
            <Route exact path="/homeAdmin" component={adra} />

          </Switch>
        </Router>
      </Provider>



    )
  }
}

export default App;
