import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';

import { EditPet, AddPet } from 'modules/pets';
import VisitsRoutes from './visits';

const PetsRoutes: React.FC = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.path}/:pid/visits`} component={VisitsRoutes} />
      <Route path={`${match.path}/:pid/edit`} component={EditPet} />
      <Route path={`${match.path}/new`} component={AddPet} />
    </Switch>
  );
};

export default PetsRoutes;
