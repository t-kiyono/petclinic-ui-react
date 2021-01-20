import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import Home from './Home';
import { ownersActions, ownersReducer, ownersEpic} from './owners';
import { petsActions, petsReducer, petsEpic } from './pets';
import Veterinarians, { VeterinariansActions, VeterinariansReducer, VeterinariansEpic } from './Vets';
import { visitsActions, visitsReducer, visitsEpic } from './visits';

export const appActions = {
  owners: ownersActions,
  pets: petsActions,
  vets: VeterinariansActions,
  visits: visitsActions,
};

export const appReducer = combineReducers({
  owners: ownersReducer,
  pets: petsReducer,
  vets: VeterinariansReducer,
  visits: visitsReducer,
});

export const appEpic = combineEpics(
  ownersEpic,
  petsEpic,
  VeterinariansEpic,
  visitsEpic,
);

export {
  Home,
  Veterinarians,
}
