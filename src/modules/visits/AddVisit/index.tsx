import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router';
import moment from 'moment';
import { Owner, Pet, Visit } from '@t-kiyono/petclinic-client-ts-fetch';

import { ReduxState } from 'store';
import { Table, FormGroup, FormLabel, FormInput, Button } from 'components';
import Actions from './actions';
import Reducer from './reducer';
import Epic from './epic';

const addVisitSelector = (state: ReduxState) => state.app.visits.addVisit;

const convertPetTableData = (owner: Owner, pet: Pet) =>
  [{
    key: 0,
    data: {
      Name: pet.name,
      'Birth Date': moment(pet.birthDate).format('YYYY-MM-DD'),
      Type: pet.type.name,
      Owner: `${owner.firstName} ${owner.lastName}`,
    }
  }];

const convertVisitsTableData = (visits: Array<Visit>) =>
  visits.map(v => ({
    key: v.id,
    data: {
      Date: moment(v.visitDate).format('YYYY-MM-DD'),
      Description: v.description,
    },
  }));

const AddVisit: React.FC = () => {
  const { owner, pet, visits } = useSelector(addVisitSelector);
  const dispatch = useDispatch();

  const match = useRouteMatch<{oid: string, pid: string}>();
  const oid = parseInt(match.params.oid);
  const pid = parseInt(match.params.pid);

  const formEl = useRef<HTMLFormElement>(null);
  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formEl.current) {
      const form = formEl.current;
      const visit: Visit = {
        petId: pet.id!,
        visitDate: new Date(form.visitDate.value),
        description: form.description.value,
      };
      dispatch(Actions.addVisit.started({oid, pid, visit}));
    }
  };

  useEffect(() => {
    dispatch(Actions.initAddVisit.started([oid, pid]));
  }, [dispatch, oid, pid]);

  return (
    <>
      <h2>New Visit</h2>
      <b>Pet</b>
      <Table contents={convertPetTableData(owner, pet)} showHeader />
      <form ref={formEl} onSubmit={handleOnSubmit}>
        <FormGroup>
          <FormLabel>
            <label htmlFor="visitDate">Date</label>
          </FormLabel>
          <FormInput>
            <input name="visitDate" id="visitDate" type="date" defaultValue={moment(new Date()).format('YYYY-MM-DD')} required />
          </FormInput>
        </FormGroup>
        <FormGroup>
          <FormLabel>
            <label htmlFor="description">Description</label>
          </FormLabel>
          <FormInput>
            <input name="description" id="description" required />
          </FormInput>
        </FormGroup>
        <FormGroup direction="row-reverse">
          <FormInput>
            <Button type="submit">Add Visit</Button>
          </FormInput>
        </FormGroup>
      </form>
      <b>Previous Visits</b>
      <Table contents={convertVisitsTableData(visits)} showHeader />
    </>
  );
};

export default AddVisit;
export {
  Actions as AddVisitActions,
  Reducer as AddVisitReducer,
  Epic as AddVisitEpic,
}
