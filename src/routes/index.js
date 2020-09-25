import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Initial from '../views/Initial';

const Routes = () => (
  <Switch>
    <Route path='/' exact component={Initial} />
  </Switch>
)

export default Routes
