import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import AddPet, { AddPetActions, AddPetReducer, AddPetEpic } from './AddPet';
import EditPet, { EditPetActions, EditPetReducer, EditPetEpic } from './EditPet';

export const petsActions = {
  addPet: AddPetActions,
  editPet: EditPetActions,
};

export const petsReducer = combineReducers({
  addPet: AddPetReducer,
  editPet: EditPetReducer,
});

export const petsEpic = combineEpics(
  AddPetEpic,
  EditPetEpic,
);

export {
  AddPet,
  EditPet,
}
