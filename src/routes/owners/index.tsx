import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';

import { FindOwners, AddOwner, EditOwner, ShowOwner, ListOwners } from 'modules/owners';
import PetsRoutes from './pets';

const OwnersRoutes: React.FC = () => {
  const match = useRouteMatch();
  return(
    <Switch>
      <Route path={`${match.path}/find`} component={FindOwners} />
      <Route path={`${match.path}/new`} component={AddOwner} />
      <Route path={`${match.path}/:oid/pets`} component={PetsRoutes} />
      <Route path={`${match.path}/:oid/edit`} component={EditOwner} />
      <Route path={`${match.path}/:oid`} component={ShowOwner} />
      <Route path={`${match.path}/`} component={ListOwners} />
    </Switch>
  );
};

export default OwnersRoutes;
