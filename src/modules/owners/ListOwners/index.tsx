import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { parse } from 'query-string';
import { Owner } from '@t-kiyono/petclinic-client-ts-fetch';

import { ReduxState } from 'store';
import { Table } from 'components';
import Actions from './actions';
import Reducer from './reducer';
import Epic from './epic';

const ownersSelector = (state: ReduxState) => state.app.owners.listOwners.owners;
const convertTableData = (owners: Array<Owner>) =>
  owners.map(o => ({
    key: o.id,
    data: {
      Name: <Link to={`/owners/${o.id}`}>{`${o.firstName} ${o.lastName}`}</Link>,
      Address: o.address,
      City: o.city,
      Telephone: o.telephone,
      Pets: o.pets ? o.pets.map(p => p.name).join(', ') : '',
    }
  }));

const ListOwners: React.FC = () => {
  const owners = useSelector(ownersSelector);
  const dispatch = useDispatch();

  const location = useLocation();
  const query = parse(location.search);
  const lastName = 'lastName' in query && typeof query.lastName === 'string' ? query.lastName : '';

  useEffect(() => {
    dispatch(Actions.initListOwners.started(lastName))
  }, [dispatch, lastName]);

  return (
    <>
      <h2>Owners</h2>
      <Table showHeader contents={convertTableData(owners)} />
    </>
  );
};

export default ListOwners;
export {
  Actions as ListOwnersActions,
  Reducer as ListOwnersReducer,
  Epic as ListOwnersEpic,
}
