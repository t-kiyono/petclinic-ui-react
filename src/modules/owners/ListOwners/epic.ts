import { filter, mergeMap } from 'rxjs/operators';
import { Epic } from 'redux-observable';
import { AnyAction } from 'typescript-fsa';

import { ownersService } from 'services';
import Actions from './actions';
import { ErrorActions } from 'error';

const initEpic: Epic<AnyAction> = action$ =>
  action$.pipe(
    filter(Actions.initListOwners.started.match),
    mergeMap(async action => {
      const params = action.payload;
      const { result, error } = await ownersService.query(params);
      if (result && !error) {
        return Actions.initListOwners.done({ params, result });
      } else {
        return ErrorActions.putError([error].join());
      }
    })
  );

export default initEpic;
