import { reducerWithInitialState } from 'typescript-fsa-reducers';

import Actions from './actions';

interface ErrorState {
  occures: boolean;
  message?: string;
}

export default reducerWithInitialState<ErrorState>({ occures: false})
  .case(Actions.putError, (state, payload) => {
    return {
      occures: true,
      message: payload,
    }
  })
  .case(Actions.clearError, () => {
    return {
      occures: false,
    }
  })
;
