import { filter, mergeMap } from 'rxjs/operators';
import { Epic } from 'redux-observable';
import { AnyAction } from 'typescript-fsa';

import { ownersService, petsService } from 'services';
import Actions from './actions';
import { ErrorActions } from 'error';

async function initShowOnwer(ownerId: number) {
  return Promise.all([
    ownersService.show(ownerId),
    petsService.query(ownerId),
  ]);
}

const initEpic: Epic<AnyAction> = action$ =>
  action$.pipe(
    filter(Actions.initShowOnwer.started.match),
    mergeMap(async action => {
      const params = action.payload;
      const [owner, pets] = await initShowOnwer(params);
      if (owner.result && pets.result) {
        return Actions.initShowOnwer.done({ params, result: [owner.result, pets.result] });
      } else {
        const errorMessage = [owner.error, pets.error].join(', ');
        return ErrorActions.putError(errorMessage);
      }
    })
  );

export default initEpic;
