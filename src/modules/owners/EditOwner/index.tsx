import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router';
import { Owner } from '@t-kiyono/petclinic-client-ts-fetch';

import { ReduxState } from 'store';
import { FormGroup, FormLabel, FormInput, Button } from 'components';
import Actions from './actions';
import Reducer from './reducer';
import Epic from './epic';

const ownerSelector = (state: ReduxState) => state.app.owners.editOwner.owner;

const EditOwner: React.FC = () => {
  const owner = useSelector(ownerSelector);
  const dispatch = useDispatch();

  const match = useRouteMatch<{oid: string}>();
  const oid = parseInt(match.params.oid);

  const formEl = useRef<HTMLFormElement>(null);
  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formEl.current) {
      const form = formEl.current;
      const owner: Owner = {
        id: oid,
        firstName: form.firstName.value,
        lastName: form.lastName.value,
        address: form.address.value,
        city: form.city.value,
        telephone: form.telephone.value,
      };
      dispatch(Actions.updateOwner.started(owner));
    }
  };

  useEffect(() => {
    dispatch(Actions.initEditOwner.started(oid));
  }, [dispatch, oid]);

  return (
    <>
      <h2>Owner</h2>
      <form ref={formEl} onSubmit={handleOnSubmit}>
        <FormGroup>
          <FormLabel>
            <label htmlFor="firstName">First Name</label>
          </FormLabel>
          <FormInput>
            <input key={owner.firstName} name="firstName" id="firstName" defaultValue={owner.firstName} required />
          </FormInput>
        </FormGroup>
        <FormGroup>
          <FormLabel>
            <label htmlFor="lastName">Last Name</label>
          </FormLabel>
          <FormInput>
            <input key={owner.lastName} name="lastName" id="lastName" defaultValue={owner.lastName} required />
          </FormInput>
        </FormGroup>
        <FormGroup>
          <FormLabel>
            <label htmlFor="address">Address</label>
          </FormLabel>
          <FormInput>
            <input key={owner.address} name="address" id="address" defaultValue={owner.address} required />
          </FormInput>
        </FormGroup>
        <FormGroup>
          <FormLabel>
            <label htmlFor="city">City</label>
          </FormLabel>
          <FormInput>
            <input key={owner.city} name="city" id="city" defaultValue={owner.city} required />
          </FormInput>
        </FormGroup>
        <FormGroup>
          <FormLabel>
            <label htmlFor="telephone">Telephone</label>
          </FormLabel>
          <FormInput>
            <input key={owner.telephone} name="telephone" id="telephone" type="tel" defaultValue={owner.telephone} required />
          </FormInput>
        </FormGroup>
        <FormGroup direction="row-reverse">
          <FormInput>
            <Button type="submit">Update Owner</Button>
          </FormInput>
        </FormGroup>
      </form>
    </>
  );
};

export default EditOwner;
export {
  Actions as EditOwnerActions,
  Reducer as EditOwnerReducer,
  Epic as EditOwnerEpic,
}
