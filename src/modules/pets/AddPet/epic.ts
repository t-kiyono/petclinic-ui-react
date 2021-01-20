import { filter, mergeMap } from 'rxjs/operators';
import { Epic, combineEpics } from 'redux-observable';
import { AnyAction } from 'typescript-fsa';
import { push } from 'connected-react-router';

import { ownersService, petsService } from 'services';
import Actions from './actions';
import { ErrorActions } from 'error';

async function initAddPet(oid: number) {
  return Promise.all([
    ownersService.show(oid),
    petsService.queryTypes(),
  ]);
}

const initEpic: Epic<AnyAction> = action$ =>
  action$.pipe(
    filter(Actions.initAddPet.started.match),
    mergeMap(async action => {
      const params = action.payload;
      const [showOwner, queryPetTypes] = await initAddPet(params);
      if (showOwner.result && queryPetTypes.result) {
        return Actions.initAddPet.done({ params, result: [showOwner.result, queryPetTypes.result] });
      } else {
        const errorMessage = [showOwner.error, queryPetTypes.error].join(', ');
        return ErrorActions.putError(errorMessage);
      }
    })
  );

const addEpic: Epic<AnyAction> = action$ =>
  action$.pipe(
    filter(Actions.addPet.started.match),
    mergeMap(async action => {
      const params = action.payload;
      const { result, error } = await petsService.save(params.oid, params.pet);
      if (result) {
        return push(`../../${params.oid}`);
      } else {
        return ErrorActions.putError([error].join());
      }
    })
  );

export default combineEpics(
  initEpic,
  addEpic,
);
