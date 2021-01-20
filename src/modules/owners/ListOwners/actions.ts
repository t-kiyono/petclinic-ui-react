import actionCreatorFactory from 'typescript-fsa';
import { Owner } from '@t-kiyono/petclinic-client-ts-fetch';

const actionCreator = actionCreatorFactory();

export default {
  initListOwners: actionCreator.async<string, Array<Owner>>('INIT_LIST_OWNERS'),
}
