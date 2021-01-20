import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router';
import { Pet } from '@t-kiyono/petclinic-client-ts-fetch';

import { ReduxState } from 'store';
import { FormGroup, FormLabel, FormInput, Button } from 'components';
import Actions from './actions';
import Reducer from './reducer';
import Epic from './epic';

const addPetSelector = (state: ReduxState) => state.app.pets.addPet;

const AddPet: React.FC = () => {
  const { owner, types } = useSelector(addPetSelector);
  const dispatch = useDispatch();

  const match = useRouteMatch<{oid: string}>();
  const oid = parseInt(match.params.oid);

  const formEl = useRef<HTMLFormElement>(null);
  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formEl.current) {
      const form = formEl.current;
      const pet: Pet = {
        ownerId: owner.id!,
        name: form.petName.value,
        birthDate: new Date(form.birthDate.value),
        type: types.find(t => t.id === parseInt(form.type.value))!,
      };
      dispatch(Actions.addPet.started({oid, pet}));
    }
  };

  useEffect(() => {
    dispatch(Actions.initAddPet.started(oid))
  }, [dispatch, oid]);

  return (
    <>
      <h2>New Pet</h2>
      <form ref={formEl} onSubmit={handleOnSubmit}>
        <FormGroup>
          <FormLabel>
            <label>Owner</label>
          </FormLabel>
          <FormInput>
            <span>{`${owner.firstName} ${owner.lastName}`}</span>
          </FormInput>
        </FormGroup>
        <FormGroup>
          <FormLabel>
            <label htmlFor="petName">Name</label>
          </FormLabel>
          <FormInput>
            <input name="petName" id="petName" required />
          </FormInput>
        </FormGroup>
        <FormGroup>
          <FormLabel>
            <label htmlFor="birthDate">Birth Date</label>
          </FormLabel>
          <FormInput>
            <input name="birthDate" id="birthDate" type="date" required />
          </FormInput>
        </FormGroup>
        <FormGroup>
          <FormLabel>
            <label htmlFor="type">Type</label>
          </FormLabel>
          <FormInput>
            <select name="type" id="type">
              {
                types.map(t =>
                  <option key={t.id} value={t.id}>{t.name}</option>
                )
              }
            </select>
          </FormInput>
        </FormGroup>
        <FormGroup direction="row-reverse">
          <FormInput>
            <Button type="submit">Add Pet</Button>
          </FormInput>
        </FormGroup>
      </form>
    </>
  );
};

export default AddPet;
export {
  Actions as AddPetActions,
  Reducer as AddPetReducer,
  Epic as AddPetEpic,
}
