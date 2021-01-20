import { filter, mergeMap } from 'rxjs/operators';
import { Epic, combineEpics } from 'redux-observable';
import { AnyAction } from 'typescript-fsa';
import { push } from 'connected-react-router';

import { ownersService } from 'services';
import Actions from './actions';
import { ErrorActions } from 'error';

const initEpic: Epic<AnyAction> = action$ =>
  action$.pipe(
    filter(Actions.initEditOwner.started.match),
    mergeMap(async action => {
      const params = action.payload;
      const { result, error } = await ownersService.show(params);
      if (result && !error) {
        return Actions.initEditOwner.done({ params, result });
      } else {
        return ErrorActions.putError([error].join());
      }
    })
  );

const updateEpic: Epic<AnyAction> = action$ =>
  action$.pipe(
    filter(Actions.updateOwner.started.match),
    mergeMap(async action => {
      const params = action.payload;
      const { result, error } = await ownersService.save(params);
      if (result && !error) {
        return push(`../${params.id}`);
      } else {
        return ErrorActions.putError([error].join());
      }
    })
  );

export default combineEpics(
  initEpic,
  updateEpic,
);
