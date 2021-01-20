import actionCreatorFactory from 'typescript-fsa';
import { Owner } from '@t-kiyono/petclinic-client-ts-fetch';

const actionCreator = actionCreatorFactory();

export default {
  initEditOwner: actionCreator.async<number, Owner>('INIT_EDIT_OWNER'),
  updateOwner: actionCreator.async<Owner, Owner>('UPDATE_OWNER'),
}
