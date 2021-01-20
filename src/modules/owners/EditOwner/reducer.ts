import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { Owner } from '@t-kiyono/petclinic-client-ts-fetch';

import Actions from './actions';

interface EditOwnerState {
  owner: Owner;
}

const initialOwner: Owner = {
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  telephone: '',
};

const initialState: EditOwnerState = {
  owner: initialOwner,
};

export default reducerWithInitialState(initialState)
  .case(Actions.initEditOwner.done, (state, payload) => {
    return {
      owner: payload.result,
    }
  })
;
