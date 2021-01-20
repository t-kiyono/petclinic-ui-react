import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { Owner, Pet, PetType } from '@t-kiyono/petclinic-client-ts-fetch';

import Actions from './actions';

interface EditPetState {
  owner: Owner;
  pet: Pet;
  types: Array<PetType>;
}

const initialOwner: Owner = {
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  telephone: '',
};

const initialPet: Pet = {
  name: '',
  ownerId: 0,
  type: {
    name: ''
  },
  birthDate: new Date(),
}

const initialState: EditPetState = {
  owner: initialOwner,
  pet: initialPet,
  types: [],
}

export default reducerWithInitialState(initialState)
  .case(Actions.initEditPet.done, (state, payload) => {
    return {
      owner: payload.result[0],
      pet: payload.result[1],
      types: payload.result[2],
    }
  })
;
