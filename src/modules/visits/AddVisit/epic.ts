import { filter, mergeMap } from 'rxjs/operators';
import { Epic, combineEpics } from 'redux-observable';
import { AnyAction } from 'typescript-fsa';
import { push } from 'connected-react-router';

import { ownersService, petsService, visitsService } from 'services';
import Actions from './actions';
import { ErrorActions } from 'error';

async function initAddVisit(params: [number, number]) {
  return Promise.all([
    ownersService.show(params[0]),
    petsService.show(params[0], params[1]),
    visitsService.query(params[0], params[1]),
  ]);
}

const initEpic: Epic<AnyAction> = action$ =>
  action$.pipe(
    filter(Actions.initAddVisit.started.match),
    mergeMap(async action => {
      const params = action.payload;
      const [showOwner, showPet, queryVisits] = await initAddVisit(params);
      if (showOwner.result && showPet.result && queryVisits.result) {
        return Actions.initAddVisit.done({ params, result: [showOwner.result, showPet.result, queryVisits.result] });
      } else {
        const errorMessage = [showOwner.error, showPet.error, queryVisits.error].join(', ');
        return ErrorActions.putError(errorMessage);
      }
    })
  );

const addEpic: Epic<AnyAction> = action$ =>
  action$.pipe(
    filter(Actions.addVisit.started.match),
    mergeMap(async action => {
      const params = action.payload;
      const { result, error } = await visitsService.save(params.oid, params.pid, params.visit);
      if (result) {
        return push(`../../../../${params.oid}`);
      } else {
        return ErrorActions.putError([error].join());
      }
    })
  );

export default combineEpics(
  initEpic,
  addEpic,
);
