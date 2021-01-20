import { filter, mergeMap } from 'rxjs/operators';
import { Epic, combineEpics } from 'redux-observable';
import { AnyAction } from 'typescript-fsa';
import { push } from 'connected-react-router';

import { ownersService, petsService } from 'services';
import Actions from './actions';
import { ErrorActions } from 'error';

async function initEditPet(params: [number, number]) {
  return Promise.all([
    ownersService.show(params[0]),
    petsService.show(params[0], params[1]),
    petsService.queryTypes(),
  ]);
}

const initEpic: Epic<AnyAction> = action$ =>
  action$.pipe(
    filter(Actions.initEditPet.started.match),
    mergeMap(async action => {
      const params = action.payload;
      const [showOwner, showPet, queryPetTypes] = await initEditPet(params);
      if (showOwner.result && showPet.result && queryPetTypes.result) {
        return Actions.initEditPet.done({ params, result: [showOwner.result, showPet.result, queryPetTypes.result] });
      } else {
        const errorMessage = [showOwner.error, showPet.error, queryPetTypes.error].join(', ');
        return ErrorActions.putError(errorMessage);
      }
    })
  );

const updateEpic: Epic<AnyAction> = action$ =>
  action$.pipe(
    filter(Actions.updatePet.started.match),
    mergeMap(async action => {
      const params = action.payload;
      const { result, error } = await petsService.save(params.oid, params.pet);
      if (result) {
        return push(`../../../${params.oid}`);
      } else {
        return ErrorActions.putError([error].join());
      }
    })
  );

export default combineEpics(
  initEpic,
  updateEpic,
);
