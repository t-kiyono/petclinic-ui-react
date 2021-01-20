import actionCreatorFactory from 'typescript-fsa';
import { Vet } from '@t-kiyono/petclinic-client-ts-fetch';

const actionCreator = actionCreatorFactory();

export default {
  initVets: actionCreator.async<void, Array<Vet>>('INIT_VETS'),
}
