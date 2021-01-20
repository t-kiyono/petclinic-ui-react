import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { Owner, PetType } from '@t-kiyono/petclinic-client-ts-fetch';

import Actions from './actions';

interface AddPetState {
  owner: Owner;
  types: Array<PetType>;
}

const initialOwner: Owner = {
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  telephone: '',
}

const initialState: AddPetState = {
  owner: initialOwner,
  types: [],
};

export default reducerWithInitialState(initialState)
  .case(Actions.initAddPet.done, (state, payload) => {
    return {
      owner: payload.result[0],
      types: payload.result[1],
    };
  })
;
