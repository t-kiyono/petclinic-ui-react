import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { Owner, Pet, Visit } from '@t-kiyono/petclinic-client-ts-fetch';

import Actions from './actions';

interface AddVisitState {
  owner: Owner;
  pet: Pet;
  visits: Array<Visit>;
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

const initialState: AddVisitState = {
  owner: initialOwner,
  pet: initialPet,
  visits: [],
};

export default reducerWithInitialState(initialState)
  .case(Actions.initAddVisit.done, (state, payload) => {
    return {
      owner: payload.result[0],
      pet: payload.result[1],
      visits: payload.result[2],
    };
  })
;
