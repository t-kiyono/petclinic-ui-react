import actionCreatorFactory from 'typescript-fsa';
import { Owner } from '@t-kiyono/petclinic-client-ts-fetch';

const actionCreator = actionCreatorFactory();

export default {
  addOwner: actionCreator.async<Owner, void>('ADD_OWNER'),
}
