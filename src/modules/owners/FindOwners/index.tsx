import React, { useRef } from 'react';
import { useHistory } from 'react-router';

import { FormGroup, FormLabel, FormInput, Button } from 'components';

const FindOwners: React.FC = () => {
  const history = useHistory(); 

  const formEl = useRef<HTMLFormElement>(null);
  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formEl.current) {
      const lastName = formEl.current.lastName.value;
      history.push(`/owners?lastName=${lastName}`);
    }
  };

  return (
    <>
      <h2>Find Owners</h2>
      <form ref={formEl} onSubmit={handleOnSubmit}>
        <FormGroup>
          <FormLabel>
            <label htmlFor="lastName">Last name</label>
          </FormLabel>
          <FormInput>
            <input size={30} maxLength={80} name="lastName" id="lastName" />
          </FormInput>
        </FormGroup>
        <FormGroup direction="row-reverse">
          <FormInput>
            <Button type="submit">Find Owner</Button>
          </FormInput>
        </FormGroup>
      </form>
      <br />
      <Button onClick={() => history.push('/owners/new')}>Add Owner</Button>
    </>
  )
};

export default FindOwners;
