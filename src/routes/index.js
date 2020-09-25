import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Initial from '../views/Initial';
import Detail from '../views/Detail';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Initial} />
    <Route path="/repository/:repository+" exact component={Detail} />
  </Switch>
);

export default Routes;
