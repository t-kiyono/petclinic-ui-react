import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Owner } from '@t-kiyono/petclinic-client-ts-fetch';

import { FormGroup, FormLabel, FormInput, Button } from 'components';
import Actions from './actions';
import Reducer from './reducer';
import Epic from './epic';

const AddOwner: React.FC = () => {
  const dispatch = useDispatch();

  const formEl = useRef<HTMLFormElement>(null);
  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formEl.current) {
      const form = formEl.current;
      const owner: Owner = {
        firstName: form.firstName.value,
        lastName: form.lastName.value,
        address: form.address.value,
        city: form.city.value,
        telephone: form.telephone.value,
      };
      dispatch(Actions.addOwner.started(owner));
    }
  };

  return (
    <>
      <h2>Add Owner</h2>
      <form ref={formEl} onSubmit={handleOnSubmit}>
        <FormGroup>
          <FormLabel>
            <label htmlFor="firstName">First Name</label>
          </FormLabel>
          <FormInput>
            <input name="firstName" id="firstName" required />
          </FormInput>
        </FormGroup>
        <FormGroup>
          <FormLabel>
            <label htmlFor="lastName">Last Name</label>
          </FormLabel>
          <FormInput>
            <input name="lastName" id="lastName" required />
          </FormInput>
        </FormGroup>
        <FormGroup>
          <FormLabel>
            <label htmlFor="address">Address</label>
          </FormLabel>
          <FormInput>
            <input name="address" id="address" required />
          </FormInput>
        </FormGroup>
        <FormGroup>
          <FormLabel>
            <label htmlFor="city">City</label>
          </FormLabel>
          <FormInput>
            <input name="city" id="city" required />
          </FormInput>
        </FormGroup>
        <FormGroup>
          <FormLabel>
            <label htmlFor="telephone">Telephone</label>
          </FormLabel>
          <FormInput>
            <input name="telephone" id="telephone" type="tel" required />
          </FormInput>
        </FormGroup>
        <FormGroup direction="row-reverse">
          <FormInput>
            <Button type="submit">Add Owner</Button>
          </FormInput>
        </FormGroup>
      </form>
    </>
  )
};

export default AddOwner;
export {
  Actions as AddOwnerActions,
  Reducer as AddOwnerReducer,
  Epic as AddOwnerEpic,
}
