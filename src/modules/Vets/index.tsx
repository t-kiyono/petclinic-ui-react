import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Vet } from '@t-kiyono/petclinic-client-ts-fetch';

import { ReduxState } from 'store';
import { Table } from 'components';
import Actions from './actions';
import Reducer from './reducer';
import Epic from './epic';

const vetsSelector = (state: ReduxState) => state.app.vets.vets;
const convertTableData = (vets: Array<Vet>) =>
  vets.map(v => ({
    key: v.id,
    data: {
      Name: `${v.firstName} ${v.lastName}`,
      Specialties: v.specialties.length === 0 ? 'none' : v.specialties.map(s => s.name).join(', '),
    }
  }));

const Veterinarians:React.FC = () => {
  const vets = useSelector(vetsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Actions.initVets.started());
  }, [dispatch]);

  return (
    <>
      <h2>Veterinarians</h2>
      <Table contents={convertTableData(vets)} />
    </>
  );
};

export default Veterinarians;
export {
  Actions as VeterinariansActions,
  Reducer as VeterinariansReducer,
  Epic as VeterinariansEpic, 
}
