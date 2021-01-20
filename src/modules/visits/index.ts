import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import AddVisit, { AddVisitActions, AddVisitReducer, AddVisitEpic } from './AddVisit';

export const visitsActions = {
  addVisit: AddVisitActions,
};

export const visitsReducer = combineReducers({
  addVisit: AddVisitReducer,
});

export const visitsEpic = combineEpics(
  AddVisitEpic,
);

export {
  AddVisit,
}
