import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router';
import moment from 'moment';
import { Pet } from '@t-kiyono/petclinic-client-ts-fetch';

import { ReduxState } from 'store';
import { FormGroup, FormLabel, FormInput, Button } from 'components';
import Actions from './actions';
import Reducer from './reducer';
import Epic from './epic';

const editPetSelector = (state: ReduxState) => state.app.pets.editPet;

const EditPet: React.FC = () => {
  const { owner, pet, types } = useSelector(editPetSelector);
  const dispatch = useDispatch();

  const match = useRouteMatch<{oid: string, pid: string}>();
  const oid = parseInt(match.params.oid);
  const pid = parseInt(match.params.pid);

  const formEl = useRef<HTMLFormElement>(null);
  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formEl.current) {
      const form = formEl.current;
      const pet: Pet = {
        id: pid,
        ownerId: owner.id!,
        name: form.petName.value,
        birthDate: new Date(form.birthDate.value),
        type: types.find(t => t.id === parseInt(form.type.value))!,
      };
      dispatch(Actions.updatePet.started({oid, pet}));
    }
  };

  useEffect(() => {
    dispatch(Actions.initEditPet.started([oid, pid]))
  }, [dispatch, oid, pid]);

  return (
    <>
      <h2>Pet</h2>
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
            <input key={pet.name} name="petName" id="petName" defaultValue={pet.name} required />
          </FormInput>
        </FormGroup>
        <FormGroup>
          <FormLabel>
            <label htmlFor="birthDate">Birth Date</label>
          </FormLabel>
          <FormInput>
            <input key={moment(pet.birthDate).format('YYYY-MM-DD')} name="birthDate" id="birthDate" type="date" defaultValue={moment(pet.birthDate).format('YYYY-MM-DD')} required />
          </FormInput>
        </FormGroup>
        <FormGroup>
          <FormLabel>
            <label htmlFor="type">Type</label>
          </FormLabel>
          <FormInput>
            <select key={pet.type.id} name="type" id="type" defaultValue={`${pet.type.id}`}>
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
            <Button type="submit">Update Pet</Button>
          </FormInput>
        </FormGroup>
      </form>
    </>
  );
};

export default EditPet;
export {
  Actions as EditPetActions,
  Reducer as EditPetReducer,
  Epic as EditPetEpic,
}
