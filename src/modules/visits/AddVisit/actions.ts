import actionCreatorFactory from 'typescript-fsa';
import { Owner, Pet, Visit } from '@t-kiyono/petclinic-client-ts-fetch';

const actionCreator = actionCreatorFactory();

type InitParams = [number, number];
type InitResult = [Owner, Pet, Array<Visit>];

interface AddParams {
  oid: number;
  pid: number;
  visit: Visit;
}

export default {
  initAddVisit: actionCreator.async<InitParams, InitResult>('INIT_ADD_VISIT'),
  addVisit: actionCreator.async<AddParams, Visit>('ADD_VISIT'),
}
