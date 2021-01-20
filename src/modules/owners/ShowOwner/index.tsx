import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Owner, Pet } from '@t-kiyono/petclinic-client-ts-fetch';

import { ReduxState } from 'store';
import { Table, Button } from 'components';
import Actions from './actions';
import Reducer from './reducer';
import Epic from './epic';

const DefinitionList = styled('dl')({
  marginTop: 0,
  marginBottom: '20px',
  'dt': {
    width: '160px',
    textAlign: 'right',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    fontWeight: 'bold',
    float: 'left',
    clear: 'left',
    lineHeight: 1.428571429,
  },
  'dd': {
    marginLeft: '180px',
    lineHeight: 1.428571429,
  }
});

const VisitTable = styled('table')({
  backgroundColor: 'transparent',
  'th': {
    textAlign: 'left',
  },
  'th, td': {
    padding: '5px',
  },
});

const showOwnerSelector = (state: ReduxState) => state.app.owners.showOwner;

const ShowOwner: React.FC = () => {
  const { owner, pets } = useSelector(showOwnerSelector);
  const dispatch = useDispatch();

  const history = useHistory();
  const match = useRouteMatch<{oid: string}>();
  const oid = parseInt(match.params.oid);

  useEffect(() => {
    dispatch(Actions.initShowOnwer.started(oid));
  }, [dispatch, oid]);

  const convertOwnerTableData = (owner: Owner) => ({
    Name: <strong>{`${owner.firstName} ${owner.lastName}`}</strong>,
    Address: owner.address,
    City: owner.city,
    Telephone: owner.telephone,
  });

  const convertPetsTableData = (pets: Array<Pet>) =>
    pets.map(p => ({
      key: p.id,
      data: {
        col1: (
          <DefinitionList>
            <dt>Name</dt>
            <dd>{p.name}</dd>
            <dt>Birth Date</dt>
            <dd>{p.birthDate.toLocaleDateString()}</dd>
            <dt>Type</dt>
            <dd>{p.type.name}</dd>
          </DefinitionList>
        ),
        col2: (
          <VisitTable>
            <thead>
              <tr>
                <th>Visit Date</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {p.visits && p.visits.map(v => (
                <tr key={v.id}>
                  <td>{v.visitDate.toLocaleDateString()}</td>
                  <td>{v.description}</td>
                </tr>
              ))}
              <tr>
                <td>
                  <Link to={`${oid}/pets/${p.id}/edit`}>Edit Pet</Link>
                </td>
                <td>
                  <Link to={`${oid}/pets/${p.id}/visits/new`}>Add Visit</Link>
                </td>
              </tr>
            </tbody>
          </VisitTable>
        )
      }
    }));

  return (
    <>
      <h2>Owner Information</h2>
      <Table contents={convertOwnerTableData(owner)} />
      <Button onClick={() => history.push(`/owners/${oid}/edit`)}>Edit Owner</Button>
      &nbsp;
      <Button onClick={() => history.push(`/owners/${oid}/pets/new`)}>Add New Pet</Button>
      <br />
      <br />
      <br />
      <h2>Pets and Visits</h2>
      <Table contents={convertPetsTableData(pets)} />
    </>
  );
};

export default ShowOwner;
export {
  Actions as ShowOwnerActions,
  Reducer as ShowOwnerReducer,
  Epic as ShowOwnerEpic,
}
