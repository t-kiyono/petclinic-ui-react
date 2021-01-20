import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { Owner, Pet } from '@t-kiyono/petclinic-client-ts-fetch';

import Actions from './actions';

interface ShowOwnerState {
  owner: Owner;
  pets: Array<Pet>;
}

const initialOwner: Owner = {
  firstName: '',
  lastName: '',
  city: '',
  address: '',
  telephone: '',
}

const initialState: ShowOwnerState = {
  owner: initialOwner,
  pets: [],
};

export default reducerWithInitialState(initialState)
  .case(Actions.initShowOnwer.done, (state, payload) => {
    return {
      owner: payload.result[0],
      pets: payload.result[1],
    }
  })
;
