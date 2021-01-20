import { filter, mergeMap } from 'rxjs/operators';
import { Epic } from 'redux-observable';
import { AnyAction } from 'typescript-fsa';

import { vetsService } from 'services';
import Actions from './actions';
import { ErrorActions } from 'error';

const initEpic: Epic<AnyAction> = action$ =>
  action$.pipe(
    filter(Actions.initVets.started.match),
    mergeMap(async action => {
      const { result, error } = await vetsService.query();
      if (result && !error) {
        return Actions.initVets.done({ result });
      } else {
        return ErrorActions.putError([error].join());
      }
    })
  );

export default initEpic;
