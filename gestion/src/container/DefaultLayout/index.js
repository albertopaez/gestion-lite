import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from '../../views/dashboard';
import Vista from '../../views/index'
 
function DefaultLayout(props) {
  return (
    <main>
      <Switch>
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/gestion" component={Vista} />
        <Redirect from="/" to="/dashboard" />
      </Switch>
    </main>
  )
}

export default DefaultLayout;
