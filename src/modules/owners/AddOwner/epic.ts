import { filter, mergeMap } from 'rxjs/operators';
import { Epic } from 'redux-observable';
import { AnyAction } from 'typescript-fsa';
import { push } from 'connected-react-router';

import { ownersService } from 'services';
import Actions from './actions';
import { ErrorActions } from 'error';

const addEpic: Epic<AnyAction> = action$ =>
  action$.pipe(
    filter(Actions.addOwner.started.match),
    mergeMap(async action => {
      const { result, error } = await ownersService.save(action.payload);
      if (result && !error) {
        return push(`/owners/${result.id}`);
      } else {
        return ErrorActions.putError([error].join());
      }
    })
  );

export default addEpic;
