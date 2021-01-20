import actionCreatorFactory from 'typescript-fsa';
import { Owner, Pet } from '@t-kiyono/petclinic-client-ts-fetch';

const actionCreator = actionCreatorFactory();

type InitResult = [Owner, Array<Pet>];

export default {
  initShowOnwer: actionCreator.async<number, InitResult>('INIT_SHOW_ONER'),
}
