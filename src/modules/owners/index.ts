import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import AddOwner, { AddOwnerActions, AddOwnerReducer, AddOwnerEpic } from './AddOwner';
import EditOwner, { EditOwnerActions, EditOwnerReducer, EditOwnerEpic } from './EditOwner';
import FindOwners from './FindOwners';
import ListOwners, { ListOwnersActions, ListOwnersReducer, ListOwnersEpic } from './ListOwners';
import ShowOwner, { ShowOwnerActions, ShowOwnerReducer, ShowOwnerEpic } from './ShowOwner';

export const ownersActions = {
  addOwner: AddOwnerActions,
  editOwner: EditOwnerActions,
  listOwners: ListOwnersActions,
  showOwner: ShowOwnerActions,
};

export const ownersReducer = combineReducers({
  addOwner: AddOwnerReducer,
  editOwner: EditOwnerReducer,
  listOwners: ListOwnersReducer,
  showOwner: ShowOwnerReducer,
});

export const ownersEpic = combineEpics(
  AddOwnerEpic,
  EditOwnerEpic,
  ListOwnersEpic,
  ShowOwnerEpic,
);

export {
  AddOwner,
  EditOwner,
  FindOwners,
  ListOwners,
  ShowOwner,
}
