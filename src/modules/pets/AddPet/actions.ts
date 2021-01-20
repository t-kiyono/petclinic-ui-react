import actionCreatorFactory from 'typescript-fsa';
import { Owner, Pet, PetType } from '@t-kiyono/petclinic-client-ts-fetch';

const actionCreator = actionCreatorFactory();

type InitResult = [Owner, Array<PetType>];

interface AddParams {
  oid: number;
  pet: Pet;
}

export default {
  initAddPet: actionCreator.async<number, InitResult>('INIT_ADD_PET'),
  addPet: actionCreator.async<AddParams, Pet>('ADD_PET'),
}
