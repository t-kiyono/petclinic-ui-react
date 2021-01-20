import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';

import { AddVisit } from 'modules/visits';

const VisitsRoutes: React.FC = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.path}/new`} component={AddVisit} />
    </Switch>
  );
};

export default VisitsRoutes;
