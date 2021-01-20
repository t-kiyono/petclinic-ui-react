import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { Vet } from '@t-kiyono/petclinic-client-ts-fetch';

import Actions from './actions';

interface VetsState {
  vets: Array<Vet>;
}

const initialState: VetsState = {
  vets: [],
};

export default reducerWithInitialState(initialState)
  .case(Actions.initVets.done, (state, payload) => {
    return {
      vets: payload.result,
    };
  })
;
