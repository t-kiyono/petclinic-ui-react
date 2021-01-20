import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { Owner } from '@t-kiyono/petclinic-client-ts-fetch';

import Actions from './actions';

interface ListOwnersState {
  owners: Array<Owner>;
}

const initialState: ListOwnersState = {
  owners: [],
};

export default reducerWithInitialState(initialState)
  .case(Actions.initListOwners.done, (state, payload) => {
    return {
      owners: payload.result
    }
  })
;
