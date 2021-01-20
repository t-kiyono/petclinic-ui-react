import actionCreatorFactory from 'typescript-fsa';
import { Owner, Pet, PetType } from '@t-kiyono/petclinic-client-ts-fetch';

const actionCreator = actionCreatorFactory();

type InitParams = [number, number];
type InitResult = [Owner, Pet, Array<PetType>];

interface UpdateParams {
  oid: number;
  pet: Pet;
}

export default {
  initEditPet: actionCreator.async<InitParams, InitResult>('INIT_EDIT_PET'),
  updatePet: actionCreator.async<UpdateParams, Pet>('UPDATE_PET'),
}
