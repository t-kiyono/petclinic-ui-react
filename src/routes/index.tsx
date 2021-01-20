import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import Home from 'modules/Home';
import Vets from 'modules/Vets';
import OwnersRoutes from './owners';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/owners" component={OwnersRoutes} />
      <Route path="/vets" component={Vets} />
      <Redirect from="/" to="/home" />
    </Switch>
  );
};

export default Routes;
